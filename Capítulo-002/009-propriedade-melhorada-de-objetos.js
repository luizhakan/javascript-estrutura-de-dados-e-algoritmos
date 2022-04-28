// desestruturação de array
let [x, y] = ["x1", "y2"];
console.log(x, y);
// esse tipo de algoritmo vai ser muito útil quando eu conhecer algoritmos de ordenação

// abreviação de propriedades
const obj = { x, y };
console.log(obj);

// nomes de métodos abreviados, essa funcionalidade me permite colocar uma função dentro de um objeto

const ola = {
  nome: "Luiz Hakan",
  mostrarNome(n) {
    console.log(n);
  },
};

console.log("Método abreviado : ");
ola.mostrarNome(ola.nome);
