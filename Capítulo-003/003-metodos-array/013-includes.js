// o includes vai me retornar um boolean
// ele serve para me dizer se um array tá retornando um boolean apropriadamente

var arr1 = [1, 2, 3];
var includes1 = arr1.includes(2);
arr1.includes(4); // false

console.log("Includes 1 : ");
console.log(includes1);

// array de string

const pessoas = ["Laryssa", "Yasmin", "Rayssa", "Lua"];
const includes2 = pessoas.includes("Laryssa");
pessoas.includes("Roberta"); // false

console.log("\nIncludes 2 : ");
console.log(includes2);

// simulação de api
const garotas /* só gosto de uma da lista*/ = [
  { nome: "Laryssa", idade: 22 },
  { nome: "Yasmin", idade: 19 },
  { nome: "Rayssa", idade: 19 /*eu acho*/ },
  { nome: "Lua", idade: 19 },
];

const filtroGarotas = garotas.filter((p) => p.nome.includes("sa"));
console.log("\nFilter + includes: ");
console.log(filtroGarotas);
