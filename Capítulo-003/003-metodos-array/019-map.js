// o map invoca a função callback passada no seu argumento para cada elemento do array e devolve um novo array como resultado
let numeros = [9, 81, 49, 64, 16];
let raizes = numeros.map(Math.sqrt); // [ 3, 9, 7, 8, 4 ]
console.log(raizes);
// ou seja, o array numeros não foi alterado!

const ParOuImpar = (elemento) => {
  return elemento % 2 === 0 ? "Par" : "Impar";
};
const resultadoFuncao = raizes.map(ParOuImpar);
console.log(resultadoFuncao);

// Usando o map genericamente
// inverter uma string
let map = Array.prototype.map;
let str = "1234";
const reversing = [].map.call(str, function(x) {
    return x;
  }).reverse().join('');

console.log(reversing);