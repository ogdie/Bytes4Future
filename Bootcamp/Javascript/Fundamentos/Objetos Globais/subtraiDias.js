//Cria uma função que recebe uma data e um número de dias como argumentos e retorna uma nova data resultante da subtração.
function subtraiDias(data, dias) {
    const msPorDia = 1000 * 60 * 60 * 24;
    const novaData = new Date(data.getTime() - dias * msPorDia);
    return novaData;
}