//Cria uma função que recebe um array como argumento e retorna um array sem números duplicados.
function arraySemDuplicados(array){
    if (!Array.isArray(array)) {
        return "Por favor insira um array válido.";
    }

    const unico = [...new Set(array)];

    return unico;
}