//Cria uma função que recebe um array como argumento e retorna um array com os números pares.
function paresDoArray(array){
    if (array.length === 0) {
        return [];
    }

    let primeiro = array[0];
    let resto = array.slice(1);

    if (primeiro % 2 === 0) {
        return [primeiro, ...paresDoArray(resto)];
    } else {
        return paresDoArray(resto);
    }
}