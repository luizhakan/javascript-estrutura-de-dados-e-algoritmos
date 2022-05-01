// o método entries() retorna um objeto que faz uma iteração dos itens do meu array
// exemplo
var timesPe = ["Sport" /*o melhor*/, "Náutico", "Santa Cruz"];
var eTimesPe = timesPe.entries();

// neste caso aqui, eu vou usar um laço for para automatizar essa iteração
for(let e /*aqui eu declaro uma variável "e" como um índice*/ of eTimesPe){
    console.log(e);
}