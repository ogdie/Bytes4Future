//Cria uma função que recebe uma data como argumento e a retorna por extenso.
function dataPorExtenso(data){
    const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira",
                      "quinta-feira", "sexta-feira", "sábado"];
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
                    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    const diaSemana = diasSemana[data.getDay()];
    const diaMes = data.getDate();
    const mesNome = meses[data.getMonth()];
    const ano = data.getFullYear();

    return `${diaSemana}, ${diaMes} de ${mesNome} de ${ano}`;
} 