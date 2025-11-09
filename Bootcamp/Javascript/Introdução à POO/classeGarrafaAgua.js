//Completa a classe GarrafaDeAgua que tem um construtor que recebe uma capacidade.
//Deve ter a propriedade aberta, que é um booleano e deve inicializada a false.
//Deve ter a propriedade quantidade, que é um valor entre 0 e capacidade e deve ser inicializada com o valor 0.
//Deve ser possível aceder às propriedades capacidade, quantidade e aberta garantindo as regras acima.
//Deve ser possível abrir e fechar a GarrafaDeAgua através do método abrirFechar.
//Deve ser possível beber da garrafa, através do método beber, consumindo 200 da quantidade e deve ser possível encher a garrafa através do método encher que recebe um argumento quant.
class GarrafaDeAgua {
  #capacidade;
  #quantidade;
  #aberta;

  constructor(capacidade) {
    this.#capacidade = capacidade;
    this.#quantidade = 0;
    this.#aberta = false;
  }

  abrirFechar() {
    this.#aberta = !this.#aberta;
  }

  beber() {
    if (!this.#aberta) {
      return "A garrafa está fechada";
    }
    if (this.#quantidade === 0) {
      return "A garrafa está vazia";
    }

    this.#quantidade -= 200;

    if (this.#quantidade < 0) {
      this.#quantidade = 0;
    }

    return `Bebeu 200ml. Restam ${this.#quantidade}ml`;
  }

    encher(quant) {
    if (!this.#aberta) {
      return "A garrafa está fechada";
    }

    this.#quantidade += quant;

    if (this.#quantidade > this.#capacidade) {
      this.#quantidade = this.#capacidade;
    }

    return `A garrafa agora tem ${this.#quantidade}ml`;
  }

  get capacidade() {
    return this.#capacidade;
  }

  get quantidade() {
    return this.#quantidade;
  }

  get aberta() {
    return this.#aberta;
  }
}