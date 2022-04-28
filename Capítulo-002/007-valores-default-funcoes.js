// posso criar funções e declarar valores default para elas
// vou usar arrow function, que usei no arquivo 006

const soma = (n1 = 2, n2 = 2) => n1 + n2;
console.log(`Função soma com o valor default : ${soma()}`); // vou usar template string também que está no arquivo 005
console.log(`Função soma com os parâmetros que eu passar : ${soma(5, 5)}`);

// isso é um exemplo bem básico, mas que podemos usar para coisas mais complexas