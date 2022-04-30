var MeuObjeto = /** @class */ (function () {
    function MeuObjeto() {
    }
    MeuObjeto.prototype.pessoa = function (b) {
        if (this.idade === b.idade) {
            return 0;
        }
        return this.idade > b.idade ? 1 : -1;
    };
    return MeuObjeto;
}());
var eu = new MeuObjeto();
console.log(eu);
// é importante este recurso para eu me certificar que estou comparando objetos do mesmo tipo, e evitar erros
