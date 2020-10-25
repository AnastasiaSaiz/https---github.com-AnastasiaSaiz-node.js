const esPar = require("./esPar");
let numero = Math.floor(Math.random() * (1000 - 1)) + 1;
console.log(`${ numero }  ${ esPar(numero)}`);