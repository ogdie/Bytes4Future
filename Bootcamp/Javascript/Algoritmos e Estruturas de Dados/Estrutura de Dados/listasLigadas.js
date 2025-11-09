class Lista {
  #primeiro;
  constructor(elem) {
    this.#primeiro = elem;
  }
  get primeiro() {
    return this.#primeiro;
  }
  insereNoInicio(elem) {
    elem.proximo = this.#primeiro;
    this.#primeiro = elem;
  }
}
class ElementoDaLista {
  #proximo;
  #dados;
  constructor(dados, proximo) {
    this.#dados = dados;
    this.#proximo = proximo;
  }
  get proximo() {
    return this.#proximo;
  }
  set proximo(proxElem) {
    this.#proximo = proxElem;
  }
  get dados() {
    return this.#dados;
  }
  get eUltimo() {
    return !this.#proximo;
  }
}