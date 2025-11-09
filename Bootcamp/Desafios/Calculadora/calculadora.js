let calculadora = {
    historico: [],
    ultimoResultado: 0,

somar(a, b) {
    if (b === undefined){
        b = a;
        a = this.ultimoResultado;
    }
    let resultado = a + b;
    this.historico.push(`${a} + ${b} = ${resultado}`);
    this.ultimoResultado = resultado;
    return this;
},

subtrair(a, b) {
    if (b === undefined){
        b = a;
        a = this.ultimoResultado;
    }
    let resultado = a - b;
    this.historico.push(`${a} - ${b} = ${resultado}`);
    this.ultimoResultado = resultado;
    return this;
},

multiplicar(a, b) {
    if (b === undefined) {
        b = a;
        a = this.ultimoResultado;
    }
    let resultado = a * b;
    this.historico.push(`${a} * ${b} = ${resultado}`);
    this.ultimoResultado = resultado;
    return this;
},

dividir(a, b) {
    if (b === undefined) {
        b = a;
        a = this.ultimoResultado;
    }
    let resultado = a / b;
    this.historico.push(`${a} / ${b} = ${resultado}`);
    this.ultimoResultado = resultado;
    return this;
},

limparHistorico() {
    this.historico = [],
    this.ultimoResultado = 0;
    return this;

},

obterResultado() {
    return BigInt(this.ultimoResultado);
},

toJSON() {
    return JSON.stringify({
        historico: this.historico,
        ultimoResultado: this.ultimoResultado.toString()
    });
},

toString() {
    if (this.historico.length === 0) {
        return "Calculadora Limpa";
    } else {
        let historicoString = "=== Histórico da Calculadora ===\n";
        for (let i = 0; i < this.historico.length; i++) {
            historicoString += `${i + 1}. ${this.historico[i]}\n`;
        }
        historicoString += `=== Fim do Histórico ===\n`;
        historicoString += `Foram realizadas ${this.historico.length} operações\n`;
        historicoString += `Último Resultado: ${this.ultimoResultado}`;
        return historicoString;
    }
  }
}

console.log(calculadora.somar(5, 10))
console.log(calculadora.subtrair(10, 5))
console.log(calculadora.multiplicar(5, 10))
console.log(calculadora.dividir(10, 5))
console.log(calculadora.obterResultado())
console.log(calculadora.toJSON());
console.log(calculadora.toString(calculadora))