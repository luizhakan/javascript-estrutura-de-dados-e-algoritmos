/*
O escopo quer dizer o local onde podemos acessar a variável no nosso código, também pode ser uma função quando trabalhamos com escopo de função. Os escopos podem ser locais ou globais.
*/

var minhaVariavel = "global";
minhaOutraVariavel = "global";

function minhaFuncao() {
  var minhaVariavel = "local";
  return minhaVariavel;
}

function minhaOutraFuncao(){
    minhaOutraVariavel = 'local';
    return minhaOutraVariavel;
}

console.log('Minha variável : ' + minhaVariavel); // 1
console.log('Minha Função : ' + minhaFuncao()); // 2
console.log('Minha outra variável : ' + minhaOutraVariavel); // 3
console.log('Minha outra função : ' + minhaOutraFuncao()); // 4

/*
{1} - Exibitá global, pois estou chamando uma variável global
{2} - Exibirá local, pois dentro da funçao minhaFuncao eu declarei a variável minhaVariavel como local, portanto ela só existe no escopo da função minhaFuncao
{3} - Exibitá global, pois estou chamando uma variável global
{4} - Exibirá local, pois dentro da funçao minhaFuncao eu declarei a variável minhaOutraVariavel como local, portanto ela só existe no escopo da função minhaOutraFuncao
*/
// Quanto mais funções e variáveis globais no código, pior ele fica, portanto crie o mínimo possível funções e variáveis globais.