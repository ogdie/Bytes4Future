//Cria uma função que recebe um array como argumento e retorna um array com o quadrado de cada elemento.
function quadradosDoArray(array){
    if (array.length === 0) {
        return [];
    }

    let primeiro = array[0];
    let resto = array.slice(1);

    return [primeiro * primeiro,...quadradosDoArray(resto)];
}