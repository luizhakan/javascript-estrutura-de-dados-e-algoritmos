// este arquivo eu vou deixar pendente para melhor explicar iteração nesse nível de array.
function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}

let a = [
  [1, 2],
  [3, 4],
  [5, 6],
];

a.map(printMatrix);