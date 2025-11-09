//Cria uma função que recebe um array e um número como argumentos e conta o número de elementos que são superiores ao número existentes no array.
function contaSuperioresAN(array, n){
    if(array.length === 0) {
        return 0;
    }

    const primeiro = array[0];
    const resto = array.slice(1);
    
    if (primeiro > n) {
        return 1 + contaSuperioresAN(resto, n);
    } else {
        return contaSuperioresAN(resto, n);
    }
}