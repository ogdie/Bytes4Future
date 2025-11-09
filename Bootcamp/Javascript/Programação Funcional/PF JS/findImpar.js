//Cria uma função que recebe um array como argumento e retorna o primeiro elemento ímpar.
function encontraImpar(array){
    return array.find(impar => impar % 2 !== 0);
}