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

// funções 

// sintaxe de uma função
function hello() /*1*/{
    // 1.1
    console.log('hello');
}
hello() // 2

function saida(texto)/*3*/{
    // 1.2
    console.log(texto); //4
}
saida('Olá' + ', tudo bem?'); // 5

function soma(num1, num2)/*6*/{
    return num1 + num2;
}
console.log(soma(1,5)) // 1.3
let resultado = soma(1,7) //7
console.log(resultado) // 1.4

/*
{1} funcão hello sem nenhum parâmetro, mas com a ação de executar o console 1.1
{2} chamando a função hello
{3} função saida com o parametro texto, vai imprimir o console 1.2
{4} o (texto) do console 1.2, é o parâmetro que vou usar quando eu chamar a função
{5} chamo a função saida com um parâmetro, e uso o + para concatenar um segundo parâmetro, esses são os parâmetros do console 1.2
{6} a função soma tem dois parâmetros, o return vai somar ambos os parâmetros e imprimir no console 1.3
{7} na variavel resultado eu chamo a função soma e defino os parâmetros, para imprimir no console 1.4
*/

// Programação orientada a objetos em Javascript
let obj = {}; // 1
obj.fabricante = 'chevrolet'; // 2
obj.modelo = 'impala'; // 2
obj.ano = '1967'; // 2
console.log(`O carro é um ${obj.fabricante} ${obj.modelo} de ${obj.ano}`) //1.1

// também é possível criar um objeto completo deste modo:
dados /*3*/ = {
    nome: /*4*/{
        primeiro: 'Luiz',
        segundo: 'Hakan'
    },
    endereço: /*5*/ {
        estado: 'Pernambuco',
        cidade: 'Recife'
    }
};

console.log(`${dados.nome.primeiro} ${dados.nome.segundo}, mora em ${dados.endereço.cidade}, ${dados.endereço.estado}`) //1.1

// em programação orientada a objetos, um objeto é uma intância de uma classe. uma classe define as características do objeto.
// exemplo:
class copaDoBrasil {
    constructor(campeão, ano){
        this.campeão = campeão;
        this.ano = ano;
    }
}

let CopaDoBrasil = new copaDoBrasil('Sport', 2008)
console.log(`${CopaDoBrasil.campeão} campeão da Copa do Brasil em ${CopaDoBrasil.ano}`)


/*
{1} eu crio o objeto e guardo numa variável chamada obj
{2} eu atribuo valores ao meu objeto
{3} aqui eu crio meu objeto 
{4} atribuo o valor nome e crio outro objeto para adicionar mais dois valores
{5} atribuo o valor endereço e crio outro objeto para adicionar mais dois valores
{6} crio uma classe chamada copaDoBrasil
{7} esse constructor é usado para criar um objeto apartir de uma classe (o this se refere ao objeto de modo global, ou seja, dentro e fora da classe)
{8} crio a variável e uso o método new para atribuir valores a minha classe copaDoBrasil 
*/

// var, let e const
var anjo = 'miguel' //1
var anjo = 'gabriel' //2
console.log(anjo) //1.1

let marca = 'samsung' //3
// let marca = 'lenovo' // 4
console.log(marca) // 1.2

const pi = 3.141593;
// pi = 3.14; // 5

const frameworkJavaScript = {
    nome: 'React'
};
frameworkJavaScript.nome = 'Angular'; // 6
console.log(frameworkJavaScript.nome)
// porém...
// const frameworkJavaScript = {
//     nome: 'Angular'
// }; // 7

/*
{1} crio a 'var' anjo e atribuo um valor
{2} reaproveito a 'var' anjo e atribuo um novo valor
{3} crio a 'let' marca e atribuo um valor
{4} erro de sintaxe: variável 'marca' já foi declarada
{5} erro de digitação não detectado: atribuição para variável constante
{6} aqui eu atribuo um valor ao objeto 'frameworkJavaScript'
{7} erro de sintaxe: variável 'frameworkJavaScript' já foi declarada

OBS: Somente a 'var' me permite atualizar o seu valor usando outra linha de código, as 'let' e 'const' não
*/

// escopo de variáveis com let e const

let filme = 'Rambo 1' // 1
// var filme = 'Tropa de Elite 2' // erro, filme já foi declarada
function RamboFilme2()/*2*/{
    const filme = 'Rambo 2'; // 3
    return filme; // 4
}
function RamboFilme3()/*2.2*/{
    const rambo3 = 'Rambo 3'; // 5
    return rambo3; // 4.4
}

console.log(RamboFilme2())
// console.log(rambo3) // 6

/*
{1} eu declaro uma variável com escopo global (pode ser usada em qualquer lugar no código(depois dela ser declarada))
{2} crio uma função para mostrar um exemplo de escopo
{3} neste caso eu declaro a variável filme com o mesmo nome, só que ela é uma variável local (só vai funcionar dentro dessa função na qual ela se encontra)
{4} o return vai me retornar o valor da variável local
{5} declaro uma variável local dentro de uma função
{6} ele vai me retornar erro, porque esta função não foi declarada.
{6} OBS: A variável ela foi sim declarada, mas ela só pode ser lida dentro da função, já que o escopo dela é o escopo local 
*/

// var, let e const 2.0
/*
let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada;
é diferente de var, que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco;
a declaração const cria uma referência somente leitura a um valor. isso não significa que esse valor é imutável, apenas que o identificador da variável constante não pode ser alterado.
se o conteúdo do identificador for um objeto, isso significa que o conteúdo do objeto (parâmetros, valores, etc) podem ser alterados.
*/

// template string
// uma coisa que eu deveria ter feito nas primeiras linhas, mas não fiz, é o template string
let nome1 = `Luiz` // 1
let sobrenome1 = `Hakan` // 2
console.log(`Nome : ${nome1}\nSobrenome : ${sobrenome1}`) // 3

let tsnum1 = 3;
let tsnum2 = 7;
let tssoma = tsnum1 + tsnum2; // 4
console.log(`${tsnum1} + ${tsnum2} = ${tssoma}`) // 3.2
/*
{1} declaro a variável nome1
{2} declaro a variável nome2
{3} faço o uso do template string
{4} guardo na variável tssoma o valor da soma entre tsnum1 + tsnum2
________________________________________________________________________________________
Existem 3 formas de de usar string, aspas simples (''), aspas duplas ("") e crase (``(shift + acento agudo)), com crase é a maneira mais fácil e recomendada de usar string, tendo em vista que é possível colocar os valores dentro de uma única string. exemplo do console 3 e 3.1 
*/

// funções de seta (arrow function)
/*
Existem 2 maneiras populares de criar funções, usando o function (sintaxe de uma função na linha 120) e usando o => (arrow function)
*/

let potenciacao = r => /*1*/{
    let total = r ** r; // 2
    return total; // 3
};
console.log(potenciacao(3)) // 4

const awmul = r => r * r; //5
console.log(`Arrow multiplicação : ${awmul(5)}`); // 5.1

const awbrasil = () => console.log('Todo mundo tenta, mas só o Brasil é penta!'); // 6
awbrasil() // 7

/*
{1} eu guardo a função dentro da variável
{2} uso a variável total para guardar o resultado da operação de potenciação
{3} o return, vai enviar o valor da potenciação pra minha variável
{4} importante ressaltar que o r que está antes da =>, é somente para eu definir um novo valor quando eu for chamar a função fora da variável
{5} eu crio uma arrow função com um único parâmetro, por isso não necessita de () nem de {}
{5.1} aqui eu dou um console (não é necessário, eu só usei o console pra usar template string) e defino o valor de r
{6} uma função sem parâmetro, feita apenas pra ser chamada e executar o console
{7} chamo a função, para exibir na minha tela o console que contém nela
*/