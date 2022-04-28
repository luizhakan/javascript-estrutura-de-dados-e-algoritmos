// template literal, que eu gosto de chamar de template string, é uma sintaxe diferente de mostrar strings

const livro = {
  autor: "Luiz Hakan",
  nome: '"Luiz Hakan, O Livro"', // nome ruim pra um livro ksks
};

console.log(`O livro ${livro.nome} foi escrito por ${livro.autor}`); // invés de utilizar aspas simples ou duplas, utiliza crase (``) e invés do +, usa ${}
