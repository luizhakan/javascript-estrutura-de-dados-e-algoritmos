// funções de seta (arrow function) é uma sintaxe mais simplificada de uma função (minha preferida)

const areaCirculo = (a) => {
  const pi = 3.14;
  const area = pi * a * a;
  return area;
};

console.log(areaCirculo(2));

// se a função tiver uma única instrução, podemos até tirar o return
const multiplicando = (n1, n2) => n1 * n2;
console.log(multiplicando(3, 3));
