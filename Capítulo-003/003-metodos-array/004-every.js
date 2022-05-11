// o every não modifica o array original
// o every testa se todos os itens do array passam nas condições fornecida pela função

const array = [10, 20, 30, 40, 50];
const funcaoEveryTrue = array.every((elemento) => elemento >= 10); // true, porquê todos os meus elementos são maiores que 10
const funcaoEveryFalse = array.every((elemento) => elemento < 10); // false, todos os elementos são maior ou igual a 10
console.log(funcaoEveryTrue);
console.log(funcaoEveryFalse);