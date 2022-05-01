// o método filter cria um novo array com todos os elementos que passaram nas condições de minha função

const maiorQue = (valor) => valor >= 10; // aqui eu digo que o meu retorno tem que ser maior ou igual a 10, é minha condição
let array = [2, 4, 6, 8, 10, 23, 25, 29];
let filtrado = array.filter(maiorQue); // aqui eu passei a minha função de callback que o método filter pede. só vai retornar os itens que satisfazem minha condição
console.log("Valores filtrados : ");
console.log(filtrado);
