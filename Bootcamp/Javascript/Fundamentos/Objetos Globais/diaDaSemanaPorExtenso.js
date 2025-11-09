//Cria uma função que recebe uma data como argumento e a retorna o dia da semana por extenso.
function diaDaSemanaPorExtenso(data){
    let diasDaSemana = [
        "domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
    ]

    let diaPorExtenso = diasDaSemana[data.getDay()];
    return diaPorExtenso;
} 