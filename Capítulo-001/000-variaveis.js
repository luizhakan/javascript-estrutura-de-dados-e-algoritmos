/*
As variáveis são lugares na memória que armazenam dados, esses dados podem ser definidos, alterados e recuperados no código, os valores atribuidos nas variáveis tem um tipo. Em JavaScript os tipos primitivos são : number (número), string (texto), boolen (booleano), function (função) e object (objeto). Também temos o undefined (indefinido) e null (nulo), também temos arrays, etc...
*/

var num = 1; // 1
num = 3; // 2
var price = 1.5; // 3
var myName = "Luiz"; // 4
var trueValue = true; // 5
var nullVar = null; // 6
var und; // 7

/*
{1} - Aqui declarei a variável num, do tipo number e o valor é 1
{2} - Aqui eu atualizei o valor de num, como JavaScript não é uma linguagem fortemente tipada, isso quer dizer que eu posso declarar ela como number e depois alterar o tipo dela para qualquer outro, porém... isso não é uma boa prática
{3} - Declarei uma variável do tipo number, porém esse é um número do tipo float, ou seja, tem ponto flutuante (ou decimais)
{4} - Declarei uma string
{5} - Declarei um boolean
{6} - Declarei um null
{7} - Declarei uma variável undefined
*/
/*
Para vermos o valor de nossas variáveis declaradas, podemos usar o console.log(variável)
*/
// Exemplo
console.log(num);

// Também podemos fazer concatenações no console
console.log("Num : " + num);
console.log("Price : " + price);

// Existem 3 maneiras de exibir saídas no JavaScript
// alert('Saída'); // 1
console.log('Saída'); // 2
// document.write('Saída'); // 3

/*
OBS: EU COMENTEI O ALERT E O DOCUMENT, PRA NÃO DAR ERRO NA HORA DE RODAR O CÓDIGO, COMO NÃO TEM NENHUM ARQUIVO HTML CHAMANDO ESTE CÓDIGO JAVASCRIPT, ELE NÃO VAI RODAR.
{1} - Exibirá uma janela de alerta no navegador
{2} - Exibirá uma mensagem no console
{3} - Vai escrever no documento HTML
*/