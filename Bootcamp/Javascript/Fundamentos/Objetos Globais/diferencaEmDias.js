//Cria uma função que recebe dois objetos do tipo Date como argumentos e retorna o tempo entre a primeira e a segunda string em dias (períodos de 24h).
//O valor retornado deve ser sempre um número positivo e inteiro.
function diferencaEmDias(data1, data2) {
    let ml = Math.abs(data1 - data2);
    let difDias = ml / (1000 * 60 * 60 * 24);

    return Math.floor(difDias);
}