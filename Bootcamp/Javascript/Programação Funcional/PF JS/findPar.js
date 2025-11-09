//Cria uma função que recebe um array como argumento e retorna o primeiro elemento par.
function encontraPar(array){
    return array.find(par => par % 2 === 0);
}