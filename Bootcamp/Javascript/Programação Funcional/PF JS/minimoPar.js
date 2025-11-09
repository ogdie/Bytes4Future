//Cria uma função que recebe um array como argumento e retorna o valor mínimo par.
function minimoPar(array){
    return array.reduce((min, current) => {
        if (current % 2 === 0) {
        // se min ainda não existe ou current < min, atualizamos
        if (min === null || current < min) {
            return current;
        }
        }
        return min; // mantém o mínimo atual
    }, null);
}