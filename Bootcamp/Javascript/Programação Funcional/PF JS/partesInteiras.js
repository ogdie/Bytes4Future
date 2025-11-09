//Cria uma função que recebe um array como argumento e retorna um array com a parte inteira de cada elemento.
function partesInteiras(array){
    return array.map(num => Math.trunc(num));
}