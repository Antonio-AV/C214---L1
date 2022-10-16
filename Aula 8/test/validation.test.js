const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Valid case', () => {
    const result = Validation.create({
        placa: "ZXY-9876",
        cor: "Azul",
        ano: 2020
    });
    expect(result).toEqual(undefined);
});

it('Invalid Case - No license plate', () => {
    const result = Validation.create({
        cor: "Preto",
        ano: 2021
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
