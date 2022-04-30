// interface é uma descrição de atributos e métodos que um objeto deve ter
interface Pessoa{
    nome: string;
    idade: number;
}

function mostrarNome(pessoa: Pessoa){
    console.log(`Nome : ${pessoa.nome}`);
    console.log(`Idade : ${pessoa.idade}`);
}

const luizHakan = {nome: "Luiz Hakan", idade: 19};
mostrarNome(luizHakan);
// até então 0 erros no código
// porem...
const maria = {nome: "Maria", idade: 18, phone: 555000222};
mostrarNome(maria);
// ele não vai me mostrar o phone pelo simples motivo : o phone não está na interface Pessoa
// em javascript é fácil eu adicionar o phone no meu objeto, mas typescript não permite!