//Cria uma função que recebe um número como argumento e retorna um array com os números pares de 0 a n.
//Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."
function paresDeZeroAN(n){
    if (typeof n !== "number" || n < 0) {
        return "Por favor insira um número superior a 0.";
  }

    // Caso base: quando n é 0
    if (n === 0) {
        return [0]; // 0 é par, então incluímos
    }

    // Chamada recursiva: pega array de 0 até n-1
    const arrayAnterior = paresDeZeroAN(n - 1);

    // Se n for par, adiciona no final do array
    if (n % 2 === 0) {
        arrayAnterior.push(n);
    }

    return arrayAnterior;
}