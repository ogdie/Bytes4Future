function arrayInfinito(array, esquerda, direita) {
    if (!array || array.length === 0) return 0;

    let soma = 0;
    const n = array.length;

    for (let i = esquerda; i <= direita; i++) {
        soma += array[i % n];
    }

    return soma;
}