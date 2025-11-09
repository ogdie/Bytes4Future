//Cria uma função que recebe como argumentos um dia e um mês e retorna o número de dias em falta para o Natal.
//Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."
//Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "PPor favor introduza um mês entre 1 e 12."
//Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."
//No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."
//No dia 25 de Dezembro deve retornar a seguinte mensagem: "Hoje é Natal!"
//Nos restantes dias deve retornar a seguinte mensagem: "Faltam x dias até ao Natal."

function calculaDiasAteAoNatal(dia, mes){
    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31.";
    }

    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12.";
    }

    if (((mes === 4) || (mes === 6) || (mes === 9) || (mes === 11)) && dia > 30) {
        return "Por favor introduza um dia entre 1 e 30.";
    }

    if (mes === 2 && dia > 28) {
        return "Por favor introduza um dia entre 1 e 28.";
    }

    if (mes === 12 && dia === 25) {
        return "Hoje é Natal!";
    }

    let diasFaltando;

    if (mes === 1) {
        diasFaltando = (31 - dia) + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 25;
    } else if (mes === 2) {
        diasFaltando = (28 - dia) + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 25;
    } else if (mes === 3) {
        diasFaltando = (31 - dia) + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 25;
    } else if (mes === 4) {
        diasFaltando = (30 - dia) + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 25;
    } else if (mes === 5) {
        diasFaltando = (31 - dia) + 30 + 31 + 31 + 30 + 31 + 30 + 25;
    } else if (mes === 6) {
        diasFaltando = (30 - dia) + 31 + 31 + 30 + 31 + 30 + 25;
    } else if (mes === 7) {
        diasFaltando = (31 - dia) + 31 + 30 + 31 + 30 + 25;
    } else if (mes === 8) {
        diasFaltando = (31 - dia) + 30 + 31 + 30 + 25;
    } else if (mes === 9) {
        diasFaltando = (30 - dia) + 31 + 30 + 25;
    } else if (mes === 10) {
        diasFaltando = (31 - dia) + 30 + 25;
    } else if (mes === 11) {
        diasFaltando = (30 - dia) + 25;
    } else if (mes === 12) {
        diasFaltando = 25 - dia;
    }
    return `Faltam ${diasFaltando} dias até ao Natal.`;
}