// declarar um array em javascript é muito simples, basta usar a sintaxe abaixo
let anos /*pode ser qualquer coisa*/ =
  /*o colchetes são obrigatórios na criação de um array*/ [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
  ];
console.log(anos); // neste console, ele vai me mostrar o meu array com todos os meus itens
// caso eu queira ver quantos itens tem no meu array, eu posso usar o length
console.log(`${anos.length} itens no meu array "anos"`);

// no javascript, o índice começa no zero, então se eu quiser ver o mês de janeiro, eu uso o seguinte código
console.log(anos[0]); // e assim sucessivamente