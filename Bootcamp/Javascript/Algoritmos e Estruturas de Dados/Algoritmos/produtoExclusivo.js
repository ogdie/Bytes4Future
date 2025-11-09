function produtoExclusivo(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        let produto = 1;
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                produto *= array[j];
            }
        }
        resultado.push(produto);
    }

    return resultado;
    
}