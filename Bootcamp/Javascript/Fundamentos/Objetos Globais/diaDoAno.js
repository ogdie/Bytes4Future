//Cria uma função que recebe uma data como argumento e retorna o dia do ano entre 1 e 366.
function diaDoAno(data){
    const inicioAno = new Date(data.getFullYear(), 0, 1);
    const diff = data - inicioAno;
    const umDia = 1000 * 60 * 60 * 24;
    return Math.floor(diff / umDia) + 1;
} 