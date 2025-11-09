//Cria uma função que recebe um array e um número como argumentos e verifica se todos os elementos são iguais a n.
function todosIguaisAN(array, n){
    return array.every(igual => igual === n);
}