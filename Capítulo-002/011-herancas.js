// a sintaxe de uma herança de classe é muito simples, herança é uma classe que herda funcionalidades de uma outra classe
// minha classe pai
class Book {
  constructor(nome, autor, paginas) {
    this.nome = nome;
    this.autor = autor;
    this.paginas = paginas;
  }
}

var livro = new Book('"Luiz Hakan, o Livro"', "Luiz Hakan", 365);
console.log(`Antes do extends : `);
console.log(livro);

// minha classe filha (a filha herda as características do pai)
class Livro extends Book {
  constructor(nome, autor, paginas, identificador) {
    super(nome, autor, paginas);
    this.identificador = identificador;
  }
}

var livro = new Livro('"Luiz Hakan, o Livro"', "Luiz Hakan", 365, 192939);

console.log(`\nDepois do extends : `);
console.log(livro);
