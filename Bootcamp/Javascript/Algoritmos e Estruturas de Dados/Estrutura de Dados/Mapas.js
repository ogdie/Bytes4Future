class ChaveValor {
    constructor(chave, valor) {
        this.chave = chave; // acessível publicamente
        this.valor = valor; // acessível e mutável
    }
}

class Mapa {
    constructor() {
        this.chavesValores = []; // array interno para armazenar ChaveValor
    }

    set(chave, valor) {
        for (let i = 0; i < this.chavesValores.length; i++) {
            if (this.chavesValores[i].chave === chave) {
                this.chavesValores[i].valor = valor; // substitui valor existente
                return;
            }
        }
        this.chavesValores.push(new ChaveValor(chave, valor));
    }

    has(chave) {
        for (let item of this.chavesValores) {
            if (item.chave === chave) return true;
        }
        return false;
    }

    get(chave) {
        for (let item of this.chavesValores) {
            if (item.chave === chave) return item.valor;
        }
        return undefined;
    }

    clear() {
        this.chavesValores = [];
    }

    delete(chave) {
        for (let i = 0; i < this.chavesValores.length; i++) {
            if (this.chavesValores[i].chave === chave) {
                this.chavesValores.splice(i, 1);
                return;
            }
        }
    }
}