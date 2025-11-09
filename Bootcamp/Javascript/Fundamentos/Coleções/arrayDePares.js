//Cria uma função que recebe um array como argumento e retorna um array com os números pares desse array.
function arrayDePares(array){
    if (!Array.isArray(array)) {
        return "Por favor insira um array válido.";
    }

    // Usamos filter para pegar apenas os números pares
    const pares = array.filter(num => typeof num === "number" && num % 2 === 0);

    return pares;
}