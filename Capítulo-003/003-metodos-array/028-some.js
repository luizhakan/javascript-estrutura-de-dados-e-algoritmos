// enquanto o every (004) itera os elementos do array até que a condição seja false, o some itera os elementos do array até que a condição seja true
// some não altera o array dentro do que ele é chamado

let array = [10, 20, 30, 40];
let array2 = [2, 4, 6, 8, 10, 12];

const funcaoSomeFalse = array.some((elemento) => elemento < 10);
console.log(funcaoSomeFalse); // retorna false porque nenhum elemento é menor que 10, ou seja, não satisfaz a função

const funcaoSomeTrue = array2.some((elemento) => elemento > 10);
console.log(funcaoSomeTrue); // retorna true porque algum elemento é maior que 10, ou seja, satisfaz a função