//Cria uma função que recebe um array como argumento e retorna um array com a raiz cúbica de cada elemento.
function raizesCubicas(array){
    return array.map(cub => Math.cbrt(cub));
}