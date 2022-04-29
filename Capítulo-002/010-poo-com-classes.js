// poo com classes é um pouco diferente de poo com funções
// posso ver poo com funções no arquivo 008 do Capítulo 1
class Book{
    constructor(nome, autor, paginas){
        this.nome = nome;
        this.autor = autor;
        this.paginas = paginas;
    }
}

const livro = new Book('"Luiz Hakan, O livro"', 'Luiz Hakan', 365); // aqui eu vou criar o meu novo livro usando a minha classe, neste caso eu tenho 3 parâmetros para a minha classe!
console.log(livro);

// isso aqui é só o básico de classes, pode ser muito mais avançado