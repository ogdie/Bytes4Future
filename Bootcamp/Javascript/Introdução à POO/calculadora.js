//Completa a classe Calculadora que tem um construtor que cria uma propriedade historico, do tipo array.
class Calculadora {
  constructor() {
    this.historico = [];
  }

  somar(a, b) {
    const resultado = a + b;
    this.historico.push({
      operacao: "soma",
      a,
      b,
      resultado
    });
    return resultado;
  }

  subtrair(a, b) {
    const resultado = a - b;
    this.historico.push({
      operacao: "subtração",
      a,
      b,
      resultado
    });
    return resultado;
  }

  multiplicar(a, b) {
    const resultado = a * b;
    this.historico.push({
      operacao: "multiplicação",
      a,
      b,
      resultado
    });
    return resultado;
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida!");
    }
    const resultado = a / b;
    this.historico.push({
      operacao: "divisão",
      a,
      b,
      resultado
    });
    return resultado;
  }

  lerHistorico(operacao) {
    if (!operacao) {
      return this.historico;
    }
    return this.historico.filter(item => item.operacao === operacao);
  }
}