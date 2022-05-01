// o fill() preenche os valores do array de acordo com o indice inicial e final, com um valor estático
// o fill recebe três parâmetros. valor, indice inicial e indice final
var array = [1, 2, 3];
console.log('Antes do filter() : ');
console.log(array);
array.fill(7 /*valor que eu quero adicionar no array*/, 0 /*onde eu vou adicionar o meu valor*/, 1 /*até onde eu vou adicionar o meu valor*/);
console.log('\nDepois do filter() : ');
console.log(array);