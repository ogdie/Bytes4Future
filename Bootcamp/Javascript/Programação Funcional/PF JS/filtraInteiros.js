//Cria uma função que recebe um array como argumento e retorna um array com os elementos que são inteiros.
function filtraInteiros(array){
    return array.filter(inteiros => Number.isInteger(inteiros));
}