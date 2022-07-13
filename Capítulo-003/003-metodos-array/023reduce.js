// executa uma função redutora (fornecida por mim) pra cada elemento do array, resultando em um único valor de retorno.

// retornando o elemento string com menor número de caracteres
const nomes = ["João", "Hakan", "Eduardo"];

const maiorNome = nomes.reduce((maiorNome, nomeAtual) => {
  if (nomeAtual.length > maiorNome.length) {
    return nomeAtual;
  } else {
    return maiorNome;
  }
});

// retornando os elementos através do type
const pokemons = [
  {
    nome: "Pikachu",
    type: "Elétrico",
  },
  {
    nome: "Squirtle",
    type: "Water",
  },
  {
    nome: "Magikarp",
    type: "Water",
  },
];

const typesPokemons = pokemons.reduce((typesPokemons, pokemonAtual) => {
  typesPokemons[pokemonAtual.type] = typesPokemons[pokemonAtual.type] || [];
  typesPokemons[pokemonAtual.type].push(pokemonAtual);

  return typesPokemons;
}, {});

// retornando os valores multiplicador por 5 e no reduce eu faço a soma de todos os valores
const produtosEletronicos = [
  {
    nome: "Computador",
    preco: 2000,
  },
  {
    nome: "Smartphone",
    preco: 1500,
  },
  {
    nome: "Notebook",
    preco: 2200,
  },
];

const total = produtosEletronicos.map(produto => produto.preco * 5).reduce((acumulador, item) => acumulador + item, 0)
