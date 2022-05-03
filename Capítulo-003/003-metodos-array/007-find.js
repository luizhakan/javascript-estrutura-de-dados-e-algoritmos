// o find vai retornar o primeiro valor que satisfazer a condição de minha função

// vou criar um objeto com nomes e números para dar exemplo

const frutas = [
  { nome: "Banana", quantidade: 5 },
  { nome: "Cereja", quantidade: 7 },
  { nome: "Maçã", quantidade: 10 },
];

const maiorQuantidade = (fruta) => {
  return fruta.quantidade > 7; // me retorne a fruta que tem uma quantidade maior que 7
};

console.log(frutas.find(maiorQuantidade)); // me retorne o objeto que tem a quantidade maior que 7, condição que satisfaz a função "maiorQuantidade"