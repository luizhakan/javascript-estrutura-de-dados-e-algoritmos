// ordena os elementos do array e retorna o array
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.reverse(); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(numeros.sort()); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numeros.sort((a, b) => a - b)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let nomes = ["Ana", "Luiz", "luiz", "ana"];
console.log(nomes.sort());