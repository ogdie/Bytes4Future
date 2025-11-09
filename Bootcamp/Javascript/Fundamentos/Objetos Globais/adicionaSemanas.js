//Cria uma função que recebe uma data e um número de semanas como argumentos e retorna uma nova data resultante da soma.
function adicionaSemanas(data, semanas) {
    const msPorDia = 1000 * 60 * 60 * 24;
    const msPorSemana = msPorDia * 7;
    const novaData = new Date(data.getTime() + semanas * msPorSemana);
    return novaData;
}