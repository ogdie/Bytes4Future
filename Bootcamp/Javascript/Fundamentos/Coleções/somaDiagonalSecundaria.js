//Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a soma de todos os elementos da diagonal secundária (começa no canto superior direito e termina no canto inferior esquerdo).
function somaDiagonalSecundaria(matrizquadrada) {
      if (!Array.isArray(matrizquadrada) || matrizquadrada.length === 0) {
        return "Por favor insira uma matriz quadrada válida.";
    }

    let soma = 0;
    let n = matrizquadrada.length;

    for (let i = 0; i < n; i++) {
        // Checa se a linha é um array e se a matriz é quadrada
        if (!Array.isArray(matrizquadrada[i]) || matrizquadrada[i].length !== n) {
        return "Por favor insira uma matriz quadrada válida.";
        }

        soma += matrizquadrada[i][n - 1 - i];
    }

    return soma;
}