const Cars = require('../src/application/carro_service');
const Constants = require('../src/utils/constants');
const Utils = require('../src/utils/utils');
const CarsRepository = require('../src/port/carro_repository');

jest.mock('../src/port/carro_repository');

it('should be able to create a car', async () => {
    const data = {
        placa: 'CZA4619',
        cor: 'Azul',
        ano: 2020,
    };

    const id = Utils.generateUuid();

    CarsRepository.create.mockResolvedValue({ ...data, id });

    const response = await Cars.create(data);

    expect(response).toEqual({ ...data, id });
});

it('should not be able to create a car', async () => {
    const data = {
        cor: 'Rosa',
        ano: 2021,
    };

    const response = await Cars.create(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('should be able to update a car', async () => {
    const data = {
        id: Utils.generateUuid(),
        placa: 'CZA4619',
        cor: 'Preto',
        ano: 2021,
    };

    CarsRepository.update.mockResolvedValue(data);

    const response = await Cars.update(data);

    expect(response).toEqual(data);
});

it('should not be able to update a car', async () => {
    const data = {
        id: Utils.generateUuid(),
        cor: 'Cinza',
        ano: 2021,
    };

    const response = await Cars.update(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('should be able to delete a car', async () => {
    const data = {
        placa: 'CZA4619',
    };

    CarsRepository.delete.mockResolvedValue(data);

    const response = await Cars.delete(data);

    expect(response).toEqual(data);
});

it('should not be able to delete a car', async () => {
    const data = {};

    const response = await Cars.delete(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('should get all cars', async () => {
    const data = [
        {
            placa: 'CZA4619',
        },
        {
            placa: 'CZA4620',
        },
    ];

    CarsRepository.list.mockResolvedValue(data);

    const response = await Cars.list();

    expect(response).toEqual(data);
});

it('should not get all cars', async () => {
    const data = {};

    const response = await Cars.list(data);

    expect(response.placa).toEqual(Constants.ErrorValidation.placa);
});

it('should get car by placa', async () => {
    const data = {
        placa: 'CZA4619',
    };

    CarsRepository.getByPlaca.mockResolvedValue(data);

    const response = await Cars.listByPlaca(data);

    expect(response).toEqual(data);
});

it('should not get car by placa', async () => {
    const data = {};

    const response = await Cars.listByPlaca(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});