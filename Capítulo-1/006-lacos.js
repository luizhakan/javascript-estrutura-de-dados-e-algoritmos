// O for no JavaScript é igual do C e Java. É um contador de laços que geralmente recebe um valor numérico, em seguida a variável é comparada com outro valor, e por fim o valor numérico é incrementado. O for recebe 3 argumentos

for (
  var i = 1;
  i < 11;
  i++
) /*i é igual a 1. enquanto i for menor que 11, i++ (i + 1)*/ {
  console.log(`${i}º passo`);
}
console.log("\n"); // isso é somente pra dar uma quebra de linha no código, pra quando for executar no console

// no while, a condição é avaliada antes da execução do código, portanto se ela for verdadeira ela não funciona
var i = 1;
while (i < 10) {
  /*Aqui é o mesmo conceito, só que o incremento eu coloco no final do código*/ console.log(
    `${i}º passo`
  );
  i++;
}

console.log("\n");

// já no do while, ele garante que o código seja executado, e depois ele avalia a condição, se for verdadeira, ele para

var i = 1;
do {
  console.log(`${i}ª turma`);
  i++;
} while (i < 11);
