//Cria uma função que recebe um array como argumento e retorna um array com o fatorial de cada elemento.
function fatoriaisDoArray(array){
    if (array.length === 0) {
        return [];
    }
    let primeiro = array[0];
    let resto = array.slice(1);

    // calcula o fatorial do primeiro elemento
    function calculaFatorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * calculaFatorial(n - 1);
    }

    return [calculaFatorial(primeiro), ...fatoriaisDoArray(resto)];
}