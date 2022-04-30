// o <T> é minha tipagem dinamica desta interface
interface Pessoa <T> {
    pessoa(b: T): number;
}

class MeuObjeto implements Pessoa<MeuObjeto>{
    idade: number;
    pessoa(b: MeuObjeto): number {
        if(this.idade === b.idade){
            return 0;
        }
        return this.idade > b.idade? 1 : -1;
    }
}

const eu = new MeuObjeto();
console.log(eu);
// é importante este recurso para eu me certificar que estou comparando objetos do mesmo tipo, e evitar erros