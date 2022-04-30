function mostrarNome(pessoa) {
    console.log("Nome : ".concat(pessoa.nome));
    console.log("Idade : ".concat(pessoa.idade));
}
var luizHakan = { nome: "Luiz Hakan", idade: 19 };
mostrarNome(luizHakan);
// até então 0 erros no código
// porem...
var maria = { nome: "Maria", idade: 18, phone: 555000222 };
mostrarNome(maria);
