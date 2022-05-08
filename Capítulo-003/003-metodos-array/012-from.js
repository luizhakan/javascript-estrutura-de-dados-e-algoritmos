// basicamente é um criador de array

// com string
var string = Array.from("luiz hakan");

console.log('\nCom string : ');
console.log(string); // ['l', 'u', 'i', 'z',' ', 'h', 'a', 'k', 'a', 'n']

// com map
var numMap = [2, 4, 6];
var comMap = Array.from(numMap, (x) => x * 2);

console.log('\nCom map : ');
console.log(comMap);

// gerando sequência de números

var sequencia = Array.from({length: 10}, (valor, numero) => numero);
console.log('\nSequencia de números : ');
console.log(sequencia);