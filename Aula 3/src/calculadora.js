const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {

    soma(x,y){
        const validateXY = validate({ x, y },  CalculadoraConstraint.calculadoraConstraint);        
        if(validateXY !== undefined){
            return 'Error';
        }
        let mais = x + y;
        return mais;
    },

    sub(x,y){
        const validateXY = validate({ x, y },  CalculadoraConstraint.calculadoraConstraint);        
        if(validateXY !== undefined){
            return 'Error';
        }
        let menos = x - y;
        return menos;
    },

    mult(x,y){
        const validateXY = validate({ x, y },  CalculadoraConstraint.calculadoraConstraint);        
        if(validateXY !== undefined){
            return 'Error';
        }
        let vezes = x * y;
        return vezes;
    },

    div(x,y){
        const validateXY = validate({ x, y },  CalculadoraConstraint.calculadoraConstraint);        
        if(validateXY !== undefined){
            return 'Error';
        }
        let quo = x / y;
        return quo;
    },

    restoDiv(x,y){
        const validateXY = validate({ x, y },  CalculadoraConstraint.calculadoraConstraint);        
        if(validateXY !== undefined){
            return 'Error';
        }
        let resto = x % y;
        return resto;
    },
};

module.exports = Calculadora;