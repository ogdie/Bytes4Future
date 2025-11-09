//Cria uma função que recebe um array e um número como argumentos e retorna um array sem o número.
function arraySemN(n, array){
    if (!Array.isArray(array)) {
        return "Por favor insira um array válido.";
    }

    // Filtra todos os elementos diferentes de n
    const resultado = array.filter(num => num !== n);

    return resultado;
}