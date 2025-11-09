//Cria a classe Inteiro que tem um construtor que recebe um valor e mantém apenas a parte inteira do valor se for um número e 0 se não for.
//Deve ser possível aceder à propriedade valor  sem a poder alterar.
class Inteiro {
    #valor;

    constructor(valor) {
        if (typeof valor === "number" && !isNaN(valor)) {
        this.#valor = Math.trunc(valor); // mantém só a parte inteira
        } else {
        this.#valor = 0; // se não for número, vira 0
        }
    }

    get valor() {
        return this.#valor;
    }
}