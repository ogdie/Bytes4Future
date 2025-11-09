class Pilha {
    constructor(capacidade) {
        this.capacidade = capacidade !== undefined ? capacidade : Infinity;
        this._elementos = []; // array interno para armazenar elementos
    }

    adicionar(elem) {
        if (this._elementos.length >= this.capacidade) {
            return "Pilha cheia!";
        }
        this._elementos.push(elem);
        return elem; // retorna o elemento adicionado
    }

    remover() {
        if (this._elementos.length === 0) {
            return "Pilha vazia!";
        }
        return this._elementos.pop();
    }

    obterValor() {
        if (this._elementos.length === 0) {
            return "Pilha vazia!";
        }
        return this._elementos[this._elementos.length - 1];
    }
}