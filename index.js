var num = 1; // {1}
num = 3; // {2}
var price = 1.5; // {3}
var myName = 'Packt'; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6}
var und; // {7}
/*
{1} num recebe 1
{2} adiciono o valor 3 a variável num, mesmo ela já tendo sido declarada antes (isso não é tão legal de ser feito)
{3} price recebe 1.5 (um valor do tipo float)
{4} myName recebe 'Packt', um valor tipo string
{5} trueValue recebe true, um valor booleano
{6} nullVar recebe null, que é um objeto pra indicar que tal coisa não tem valor
{7} und recebe nada, ou seja, um valor indefinido
*/

// = (recebe) == (valor igual) === (valor e tipo igual)

let num1 = 2; // {1}
let num2 = "2"; // {2}

console.log(num1 == num2) // {3}
console.log(num1 === num2) // {4}

/*
{1} num1 recebe 2 do tipo number
{2} num2 recebe 2 do tipo string
{3} o console vai executar o operador == e vai somente me retornar se o valor é igual, não importa o tipo, e sim, o valor é igual, então é true
{4} este console vai comparar o valor e o tipo, vai dar false, porque o valor é igual, mas o tipo não.
*/

// if, if else, else if, ? :, switch

let numif1 = 1; // 1

if(numif1 == 1 /*2*/){
    console.log(`O número é igual a 1. (método if)` /*3*/)
}

let numif2 = 30; 
if(numif2 == 1){ // 4
    // 4.1
    console.log(`O número correto é igual a ${numif2}, método if else`)
} else /*5*/{ 
    // 4.2
    console.log(`O número é igual a ${numif2}. método (if else)`)
}

let hora = 13;
if(hora >= 5 && hora < 12/*6*/){
    // 6.1
    console.log('Bom dia')
} else if (hora >= 12 && hora < 18)/*7*/{ /*6.2*/
    console.log('Boa tarde')
} else if (hora >= 18)/*8*/{
    /*6.3*/
    console.log('Boa noite')
}

let média = 7;
console.log(média >= 7? 'APROVADO':'REPROVADO') // 9

let mes = 1;
switch(mes)/*10*/{
    case 1:
        console.log('Janeiro')
        break
    case 2:
        console.log('Fevereiro')
        break
    case 3:
        console.log('Março')
        break
    case 4:
        console.log('Abril')
        break
    case 5:
        console.log('Maio')
        break
    case 6:
        console.log('Junho')
        break
    case 7:
        console.log('Julho (melhor mês)')
        break
    case 8:
        console.log('Agosto')
        break
    case 9:
        console.log('Setembro')
        break
    case 10:
        console.log('Outubro')
        break
    case 11:
        console.log('Novembro')
        break
    case 12:
        console.log('Dezembro')
        break
}

/*
{1} defino o valor da minha variável
{2} se numif1 for igual a 1, então execute o console
{3} console mostrando o resultado da condição caso ela for verdadeira
{4} se numif2 for igual a 1, execute o console 4.1
{5} se não for igual a 1, execute o console 4.2
{6} se hora for igual ou maior a 5, e hora for menor que 12, execute o console 6.1
{7} se hora for maior ou igual a 12 e hora for menor que 18, execute o console 6.2
{8} se hora for maior ou igual a 18, execute o console 6.3
{9} ? é se, : é senão. neste console eu pergunto, média é igual ou maior que 7(?) se for, 'APROVADO' senão (:) 'REPROVADO
{10} switch é um laço usado para valores específicos. eu chamo o laço e uso o parâmetro mês. se mês for igual a 1 console.log('Janeiro), e assim sucessivamente.
no switch é importante usar o break depois das acões, porque mesmo quando a condição estiver certa, sem o break ele vai executar todo o código abaixo até esgotar.
*/

