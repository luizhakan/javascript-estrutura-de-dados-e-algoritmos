// array multidimensional é basicamente um array dentro de um array

const panther = [
  ["luiz", "developer"],
  ["kaio", "hacker"],
  ["gabriel", "developer"],
  ["carlos", "malware analyser"],
  ["joão", "hacker"],
];

console.log(panther[0]);
console.log("\n");
panther.push(["rafael", "hacker"]);
panther.push(["false", "booleanEncontrado"]);

console.log(panther);
console.log("\nMétodo fknd em array multidimensional, valor abaixo foi encontrado : ");

const fBoolean = (item) => {
  return item === "booleanEncontrado";
};
const fin = panther[6].find(fBoolean);
console.log(fin);
