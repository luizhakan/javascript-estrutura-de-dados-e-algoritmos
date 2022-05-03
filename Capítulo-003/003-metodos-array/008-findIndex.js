// o find retorna o objeto que satisfaz a minha condição, o findIndex retorna o índice do objeto que satisfaz minha condição

const numeros = [10, 3, 4, 5, 9];

const primos = (element) => {
  var inicio = 2;
  while (inicio <= Math.sqrt(element)) {
    if (element % inicio++ < 1) {
      return false;
    }
  }
  return element > 1;
};

console.log(numeros.findIndex(primos)); // neste caso ele vai me retornar 0, por que o primeiro item do meu array é um número primo e satisfaz a condição da função