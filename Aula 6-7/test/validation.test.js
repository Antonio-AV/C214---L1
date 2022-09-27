const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Wall-E",
        produtora: "Disney Pixar",
        duracao: "1h 37min",
        ano: 2008
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        produtora: "Disney Pixar",
        duracao: "1h 37min",
        ano: 2008
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro produtora', () => {
    const result = Validation.create({
        nome: "Wall-E",
        duracao: "1h 37min",
        ano: 2008
    });
    expect(result.produtora).toEqual(Constants.ErrorValidation.produtora);
});

it('Caso inválido - sem o parâmetro duração', () => {
    const result = Validation.create({
        nome: "Wall-E",
        produtora: "Disney Pixar",
        ano: 2008
    });
    expect(result.duracao).toEqual(Constants.ErrorValidation.duracao);
});

it('Caso inválido - sem o parâmetro ano', () => {
    const result = Validation.create({
        nome: "Wall-E",
        produtora: "Disney Pixar",
        duracao: "1h 37min"
    });
    expect(result.ano).toEqual(Constants.ErrorValidation.ano);
});

it('Caso inválido - passando o ano como string', () => {
    const result = Validation.create({
        nome: "Wall-E",
        produtora: "Disney Pixar",
        duracao: "1h 37min",
        ano: "Dois mil e oito"
    });
    expect(result.ano).toEqual(Constants.ErrorValidation.ano);
});
