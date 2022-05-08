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

// const enviar = (email) => {
//     console.log(`Email enviado para ${email} com sucesso!`)
// }

emails.forEach((email, posicao, quantidade) => {
console.log(`Email enviado para ${email} com sucesso! Sua posição foi [${posicao + 1}].`);
console.log(`[Quantidade de emails na lista ${quantidade.length}]`);
});
