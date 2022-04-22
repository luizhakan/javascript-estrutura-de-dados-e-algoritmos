var framework = 'Angular';
var framework = 'React';
// percebe como isso é perigoso?? eu posso alterar o valor do meu código a qualquer momento, isso em questão de segurança é inutilizável, pois é uma vulnerabilidade grave

let linguagem = 'JavaScript';
let linguagem = 'TypeScript';
// se você está numa ide com intellisense igual o vscode, esse código dá erro, pois não é possível declarar a variável linguagem novamente no escopo global, isso é seguro

const pi = 3.14;
const pi = 3.0;
// o const tem o mesmo comportamento do let, porém, o const é uma variável com um valor constante, ou seja, somente para leitura
// mesmo se redeclararmos o valor da let ou da const com var, não vai funcionar

const jsFramework = {
    nome: 'React'
}

jsFramework.nome = 'Vue.js';

// const é somente para leitura, o valor vai ser alterado, mas a variável não vai ser, ou seja, a referência na memória ainda vai continuar o objeto original