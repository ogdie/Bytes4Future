//Cria uma função que recebe um número como argumento e retorna um array com os números de 0 a n.
//Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."
function arrayDeZeroAN(n){
    if (typeof n !== "number" || n < 0) {
        return "Por favor insira um número superior a 0.";
    }

    // Caso base: quando n é 0, retornamos [0]
    if (n === 0) {
        return [0];
    }

    // Chamada recursiva: pegamos o array de 0 até n-1
    const arrayAnterior = arrayDeZeroAN(n - 1);

    // Adicionamos n no final do array
    arrayAnterior.push(n);

    return arrayAnterior;
}