//Corrige e completa a classe Ventoinha que tem um construtor.
//Deve ter a propriedade ligada, que é um booleano e deve inicializada a false.
//Deve ter a propriedade intensidade, que é um valor entre 1 e 10 e deve ser inicializada com o valor 5.
//Deve ser possível aceder às propriedades ligada e intensidade garantindo as regras acima.
//Deve ser possível ligar e desligar a Ventoinha através do método ligarDesligar.
//Deve ser possível aumentar e diminuir a intensidade da Ventoinha através dos métodos aumentarIntensidade e diminuirIntensidade.
class Ventoinha {
  #ligada;
  #intensidade;

  constructor() {
    this.#ligada = false;
    this.#intensidade = 5;
  }

  ligarDesligar() {
    this.#ligada = !this.#ligada; // alterna entre true e false
  }

  aumentarIntensidade() {
    if (this.#intensidade < 10) {
      this.#intensidade += 1;
    }
  }

  diminuirIntensidade() {
    if (this.#intensidade > 1) {
      this.#intensidade -= 1;
    }
  }

  get ligada() {
    return this.#ligada;
  }

  get intensidade() {
    return this.#intensidade;
  }
}