//Cria uma função que recebe um número como argumento e retorna um array com os números de n a 0.
//Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."
function arrayDeNAZero(n){
    if (typeof n !== "number" || n < 0) {
        return "Por favor insira um número superior a 0."
    }

    if (n === 0) {
        return [0];
    }

    const arrayRestante = arrayDeNAZero(n - 1);

    return [n, ...arrayRestante];
}