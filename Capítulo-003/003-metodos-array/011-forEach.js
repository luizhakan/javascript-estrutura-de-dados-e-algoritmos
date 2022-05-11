// o forEach executa uma função em cada elemento do array

// imprimindo o index de um array
let contagem = ["zero", "um", "dois", "três", "quatro", "cinco"];
contagem.forEach((element, index) => {
  return console.log(`[${index}] ${element}`);
});

console.log("\n");
// vou criar um array com uma lista de emails
const emails = [
  "luizhakan@protonmail.com",
  "luizhakan@gmail.com",
  "luizhakan@hotmail.com",
  "luizhakan@outlook.com",
];

emails.forEach((email, posicao, quantidade) => {
  console.log(
    `Email enviado para ${email} com sucesso! Sua posição foi [${posicao + 1}].`
  );
  console.log(`[Quantidade de emails na lista ${quantidade.length}]`);
});

console.log("\n");
// isso aqui é o mesmo que usar um laço for
let numeros = [10, 20, 30, 40, 50];
const funcaoForEach = numeros.forEach((elemento) =>
  console.log(elemento % 2 === 0)
);
