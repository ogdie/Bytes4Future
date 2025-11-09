//Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a soma de todos os elementos da diagonal principal (começa no canto superior esquerdo e termina no canto inferior direito).
function somaDiagonalPrincipal(matrizquadrada) {
    if (!Array.isArray(matrizquadrada) || matrizquadrada.length === 0) {
        return "Por favor insira uma matriz quadrada válida.";
    }

    let soma = 0;

    for (let i = 0; i < matrizquadrada.length; i++) {
        // Checa se a linha é um array e se a matriz é quadrada
        if (!Array.isArray(matrizquadrada[i]) || matrizquadrada[i].length !== matrizquadrada.length) {
        return "Por favor insira uma matriz quadrada válida.";
        }

        // Soma o elemento da diagonal principal
        soma += matrizquadrada[i][i];
    }

    return soma;
}