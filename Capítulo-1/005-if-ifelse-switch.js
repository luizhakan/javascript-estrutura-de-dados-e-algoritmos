// vocabulário
/*
if - se
else - senão
switch - trocar
case - caso
break - pausa
continue - prosseguir
*/

var num = 1;
if (num === 1) {
  /*se num for igual a 1*/ console.log(`num é igual a : ${num}`); // imprima isso na tela
}

var num = 0;
if (num === 1) {
  /*se num for igual a 1*/ console.log(
    `num é igual a : ${num}`
  ); /*imprima isso na tela*/
} /*se não for igual a 1*/ else {
  console.log("num não é igual a 1"); // imprima isso na tela
}

num === 0 ? /*se num for igual a 0*/ num++ : /*se num não for igual a 0*/ num--;

var mes = 3;
if (mes === 1) {
  /*se mes for igual a 1*/ console.log("Janeiro"); // imprima isso na tela
} else if (mes === 2) {
  /*se mes não for igual a 1, e mes for igual a 2*/ console.log("Fevereiro"); // imprima isso na tela
} else if (mes === 3) {
  /*se mes não for igual a 2, e mes for igual a 3*/ console.log("Março"); // imprima isso na tela
}

var mes = 4;

switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  default:
    console.log("O mês não é nenhum desses acima");
}
// case(caso) mes for igual a 1, imprima isso na tela e pare a função, case(caso) mes for igual a 2, imprima isso na tela e pare a função, etc...
// o break é importante, sem ele, a função toda vai ser executada mesmo se a condição for verdadeira