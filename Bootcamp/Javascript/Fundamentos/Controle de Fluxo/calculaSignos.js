//Cria uma função que recebe como argumentos um dia e um mês e retorna o signo correspondente.
//Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."
//Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."
//Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."
//No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."
//Os signos estão divididos da seguinte maneira:
//Carneiro - 21.03 a 20.04
//Touro - 21.04 a 20.05
//Gémeos - 21.05 a 20.06
//Caranguejo - 21.06 a 22.07
//Leão - 23.07 a 22.08
//Virgem - 23.08 a 22.09
//Balança - 23.09 a 22.10
//Escorpião - 23.10 a 21.11
//Sagitário - 22.11 a 21.12
//Capricórnio - 22.12 a 20.01
//Aquário - 21.01 a 18.02
//Peixes - 19.02 a 20.03

function calculaSigno(dia, mes){
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

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)) {
        return "Carneiro";
    } else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) {
        return "Touro";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        return "Gémeos";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        return "Caranguejo";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        return "Leão";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        return "Virgem";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        return "Balança";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        return "Escorpião";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        return "Sagitário";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20)) {
        return "Capricórnio";
    } else if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 18)) {
        return "Aquário";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        return "Peixes";
    }
}