//Implementa a função somatorio que retorna a soma de todos os valores presentes no array de números arr.
function somatorio(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}