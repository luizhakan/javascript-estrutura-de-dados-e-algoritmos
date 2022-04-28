// spread operator (operador de espalhamento)

const soma = (n1, n2) => n1 + n2;
const parametros = [5, 5];
console.log(soma(...parametros)); // aqui eu adicionei o meu array parametros como argumentos usando o spread operator

console.log(soma.apply(undefined, parametros)); // este código é a mesma coisa do código acima (o de cima é mais fácil ksks)


