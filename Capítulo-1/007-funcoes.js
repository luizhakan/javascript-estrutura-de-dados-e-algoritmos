// sintaxe básica, sem argumento e sem retorno
function ola() {
  console.log("olá");
}

// aqui eu chamo a função olá, e ela vai executar as instruções que foram definidas nela
ola();

// sintaxe básica com argumentos e sem retorno
function saida(texto) {
  console.log(texto);
}

saida("texto?");
// eu posso usar quantos argumentos eu quiser, mas nesse caso, ele só vai me retornar o primeiro argumento, pois na função só foi definido 1 argumento
saida("texto1", "texto2", "texto3", 1 + 1);

// sintaxe básica com dois argumentos e return
function soma(num1, num2) {
  return console.log(num1 + num2);
}

// aqui eu coloco dentro de uma variável, mas você pode chamar a função e colocar os argumentos normalmente
var resultado = soma(2, 2);
console.log(resultado);

// não está no livro, mas eu não vou deixar passar em branco, é minha sintaxe favorita por isso vou colocar aqui

// arrow function
// esta sintaxe é menor e tem a mesma funcionalidade da sintaxe normal de uma função, particularmente eu gosto assim, a diferença é menor mas são quase 100% iguais
var multiplicacao = (num1, num2) => num1 * num2;
console.log(multiplicacao(3, 3));
