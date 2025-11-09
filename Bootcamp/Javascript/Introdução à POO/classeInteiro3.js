//Encontra os erros que existem na classe Inteiro, é esperado que:
//A classe Inteiro tenha um construtor que recebe um valor e mantém apenas a parte inteira do valor se for um número e 0 se não for.
//Deve ser possível aceder e alterar a propriedade valor garantindo as regras acima.
//Se o valor estiver definido e for passado um novo valor inválido, deve manter-se o valor anterior.
class Inteiro {
  #inteiro;

  constructor(valor) {
    if (typeof valor === "number" && Number.isFinite(valor)) {
      this.#inteiro = Math.trunc(valor);
    } else {
      this.#inteiro = 0;
    }
  }

  get valor() {
    return this.#inteiro;
  }

  set valor(novoValor) {
    if (typeof novoValor === "number" && Number.isFinite(novoValor)) {
      this.#inteiro = Math.trunc(novoValor);
    }
  }
}