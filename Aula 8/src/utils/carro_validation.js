const create = {
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
};

const update = {
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};