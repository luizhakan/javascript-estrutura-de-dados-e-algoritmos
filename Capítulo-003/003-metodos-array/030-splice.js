// o splice é um método que me permite remover um item em qualquer índice do meu array

const panther = ["Luiz", "João", "Kaio", "Eduardo"];
console.log(panther); // [ 'Luiz', 'João', 'Kaio', 'Eduardo' ]
panther.splice(1,1); // splice(apartir deste indice, quantos elementos eu vou remover)
console.log(panther);

// o splice também me permite adicionar itens ao meu array de modo específico
console.log('\nAdicionando com splice : ');
panther.splice(3,0, 'João', 'Rafael', 'Lucas') // (apartir do 3 argumento (depois do zero, nessa linha), são itens que eu irei adicionar ao meu array)
console.log(panther); // [ 'Luiz', 'Kaio', 'Eduardo', 'João', 'Rafael', 'Lucas' ]