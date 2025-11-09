//Cria a classe Inteiro que tem um construtor que recebe um valor e mantém apenas a parte inteira do valor se for um número e 0 se não for.
//Deve ser possível aceder e alterar a propriedade valor garantindo as regras acima.
class Inteiro {
     #valor;

    constructor(valor) {
        if (typeof valor === "number" && Number.isFinite(valor)) {
        this.#valor = Math.trunc(valor);
        } else {
        this.#valor = 0;
        }
    }

    get valor() {
        return this.#valor;
    }

    set valor(novoValor) {
        if (typeof novoValor === "number" && Number.isFinite(novoValor)) {
        this.#valor = Math.trunc(novoValor);
        }
    }
}