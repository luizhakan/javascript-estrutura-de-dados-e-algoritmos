// concat como o próprio nome sugere, é um método que me permite adicionar um novo array ou valores passados como parâmetro
let alfa = ["a", "l", "f", "a"];
console.log(alfa); // irá retornar o meu array alfa
let numerico = [1, 2, 3, 4];
console.log(numerico); // irá retornar meu array numerico

let alfanumerico = alfa.concat(numerico);  // aqui ele vai fazer a concatenação do meu array alfa com o array numérico tornando um array só
console.log(`\nApós o método concat : `);
console.log(alfanumerico);