const Calculadora = require('./src/calculadora');

let soma = Calculadora.soma(4, 2);
let sub = Calculadora.sub(4, 2);
let mult = Calculadora.mult(4, 2);
let div = Calculadora.div(4, 2);
let resto = Calculadora.restoDiv(4, 2);

console.log(soma);
console.log(sub);
console.log(mult);
console.log(div);
console.log(resto);
