// == igual mesmo se os tipos diferentes
// exemplo
num = 1;
string = "1";

// num é igual a string? (valor e não tipo)
num == string; // true

// num é igual a string? (valor e tipo)
num === string;

console.log("luiz" === true); // false (são tipos diferentes)
console.log("luiz" === "luiz"); // true, são tipos e valores iguais

var pessoa1 = { nome: "luiz" };
var pessoa2 = { nome: "luiz" };
console.log(pessoa1 === pessoa2); // false, pois são dois objetos diferentes