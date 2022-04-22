// Objeto é uma referência a um local da memória que possui um valor. Um objeto pode ser uma variável, função, ou estrutura de dados. Em programação o objeto é algo como um molde

// aqui tá criado um objeto, mas ele não tem nenhum valor
var obj = {};

// aqui eu criei um objeto com pares {chave: 'valor'}
var obj = {
  nome: {
    primeiro: "Luiz",
    segundo: "Hakan",
  },
  endereco: "Rua dos Principes",
};

console.log(obj);

// Em programação orientada a objetos, um objeto é uma instância de uma classe, uma classe vai definir as características do objeto.

// assim é um exemplo de construtor
function Livro(titulo, paginas, identificador) {
  this.titulo = titulo;
  this.paginas = paginas;
  this.identificador = identificador;
}

// para eu adicionar valor nesta classe, faço assim
var livro1 = new Livro("Luiz Livro", 365, 0909);
console.log(livro1);
livro1.titulo = 'Luiz Novo Livro'; // atualizo o titulo do meu objeto de minha classe
console.log(livro1);

// programação orientada a objetos é um assunto que deve ser mais aprofundado, aqui só falei o conceito