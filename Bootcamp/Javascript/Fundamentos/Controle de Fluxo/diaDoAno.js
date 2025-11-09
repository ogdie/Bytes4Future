//Cria uma função que recebe como argumentos um dia e um mês e retorna o dia do ano correspondente (entre 1 e 365).
//Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."
//Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."
//Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."
//No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."

function calculaDiaDoAno(dia, mes){
    if (dia < 1 || dia > 31 ) {
        return "Por favor introduza um dia entre 1 e 31.";
    }

    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12.";
    }

    if (((mes === 4) || (mes === 6) || (mes === 9) || (mes === 11)) && dia > 30) {
        return "Por favor introduza um dia entre 1 e 30."
    }

    if (mes === 2 && dia > 28) {
        return "Por favor introduza um dia entre 1 e 28.";
    }

    if (mes === 1) {
        return dia;
    } else if (mes === 2) {
        return 31 + dia;
    } else if (mes === 3) {
        return 31 + 28 + dia;
    } else if (mes === 4) {
        return 31 + 28 + 31 + dia;
    } else if (mes === 5) {
        return 31 + 28 + 31 + 30 + dia;
    } else if (mes === 6) {
        return 31 + 28 + 31 + 30 + 31 + dia;
    } else if (mes === 7) {
        return 31 + 28 + 31 + 30 + 31 + 30 + dia;
    } else if (mes === 8) {
        return 31 + 28 + 31 + 30 + 31 + 30 + 31 + dia;
    } else if (mes === 9) {
        return 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + dia;
    } else if (mes === 10) {
        return 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + dia;
    } else if (mes === 11) {
        return 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + dia;
    } else {
        return 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + dia;
    }
}