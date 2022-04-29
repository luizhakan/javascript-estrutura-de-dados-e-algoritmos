class meuNome{
    constructor(nome){
        this._nome = nome;  // esse underline indica ao programador que lerá esse código que não se deve mexer nesse atributo por que ele é privado, mesmo ela não sendo, mas é boa prática não mexer em atributos privados
    }

    get(){
        return this._nome;
    }

    set(valor){
        this._nome = valor;
    }
}

// o get e set são usado para definições de valores na minha classe
// eu posso usar a minha classe normalmente
// atenção ao _underline antes do atributo, não mexa em atributos com _underline

let nome = new meuNome('Luiz');

console.log(nome);

// basicamente é isso get e set