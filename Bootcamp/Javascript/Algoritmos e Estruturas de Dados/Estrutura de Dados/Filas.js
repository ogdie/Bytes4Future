class Fila {
    constructor() {
        this.itens = []; // única propriedade interna para armazenar os elementos
    }

    adicionar(elem) {
        this.itens.push(elem); // adiciona no final da fila
    }

    remover() {
        if (this.itens.length === 0) return "Fila vazia!";
        return this.itens.shift(); // remove do início (FIFO)
    }

    obterElemento() {
        if (this.itens.length === 0) return "Fila vazia!";
        return this.itens[0]; // retorna o primeiro elemento sem remover
    }
}