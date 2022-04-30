// se eu não atribuir um tipo a uma variável, o typescript entenderá automaticamente que esta variável tem o tipo any
// se eu crio uma variável e não lhe dou um valor inicial, é recomendado eu atribuir um tipo a ela

let linguagemFavorita: string;
let linguagens = ["JavaScript", "Python", "C"];
linguagemFavorita = linguagens[0];

// porém... o typescript também me ajuda a manter um código limpo
// se eu inicio uma variável com um valor, logo ele é automaticamente atribuido a ela
// mas devemos avaliar o caso em que temos que tipar
let idade = 19; // aqui o typescript sabe que o tipo da variável é um número
let simOuNao = false; // aqui o typescript sabe que o tipo da variável é um booleano
let linguagem = "JavaScript"; // aqui o typescript sabe que o tipo da variável é uma string
