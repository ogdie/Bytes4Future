//Cria uma função que recebe uma data e um número de horas como argumentos e retorna uma nova data resultante da subtração.
function subtraiHoras(data, horas) {
    const msPorHora = 1000 * 60 * 60;
    const novaData = new Date(data.getTime() - horas * msPorHora);
    return novaData;
}