// o flat cria um novo array com todos elementos sub-array concatenados

var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); // [ 1, 2, 3, 4 ] ele concatenou o meu sub-array

var arr2 = [1, 2, 3, [4, 5, [6, 7]]];
console.log(arr2.flat()); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ] ele concatenou o sub array do meu sub array

var arr3 = [1,2,3, , , 5];
console.log(arr3.flat()); // [ 1, 2, 3, 5 ] ele também remove espaços vazios no array
// reduce e concat são alternativas