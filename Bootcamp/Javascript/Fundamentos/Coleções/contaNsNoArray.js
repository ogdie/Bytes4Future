//Cria uma função que recebe um array e um número como argumentos e retorna o número de vezes em que n aparece nesse array.
function contarNsNoArray(n, array){
    if (!Array.isArray(array)) {
        return "Por favor insira um array válido.";
    }

    // Inicializa contador
    let contador = 0;

    // Percorre cada elemento do array
    for (let num of array) {
        if (num === n) { // Se o elemento é igual a n, aumenta o contador
        contador++;
        }
    }

    return contador;
}
