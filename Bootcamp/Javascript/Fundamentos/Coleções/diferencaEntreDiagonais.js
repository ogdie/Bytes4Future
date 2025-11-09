//Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a o valor da diferença entre a soma da diagonal principal (começa no canto superior esquerdo e termina no canto inferior direito) e a soma da diagonal secundária (começa no canto superior direito e termina no canto inferior esquerdo).
function diferencaEntreDiagonais(matrizquadrada) {
    if (!Array.isArray(matrizquadrada) || matrizquadrada.length === 0) {
        return "Por favor insira uma matriz quadrada válida.";
    }

    let somaPrincipal = 0;
    let somaSecundaria = 0;
    let n = matrizquadrada.length;

    for (let i = 0; i < n; i++) {
        if (!Array.isArray(matrizquadrada[i]) || matrizquadrada[i].length !== n) {
        return "Por favor insira uma matriz quadrada válida.";
        }

        // Soma da diagonal principal
        somaPrincipal += matrizquadrada[i][i];

        // Soma da diagonal secundária
        somaSecundaria += matrizquadrada[i][n - 1 - i];
    }

    return somaPrincipal - somaSecundaria;
}