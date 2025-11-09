//A função tempoEmPalavras recebe como argumentos a hora(h) e o minuto(m).
//Implementa a função para retornar a hora dita em português com os números por extenso.
//Regras:
//A hora varia entre 0 e 23
//O minuto varia entre 0 e 59
//Depois do minuto 30, deve ser dito, por exemplo, "dez para as cinco"
//12 horas devem ser lidas como meio dia
//00 horas devem ser lidas como meia noite
//As horas da tarde devem ser lidas iguais às da manhã, exceto meio dia e meia noite
//A hora certa deve ser seguida pela expressão "em ponto",
//30 minutos devem ser lidos como "meia"
//15 minutos devem ser lidos como "um quarto"
function tempoEmPalavras(h, m) {
    const numeros = new Map([
        [0, "meia noite"],
        [1, "uma"],
        [2, "duas"],
        [3, "três"],
        [4, "quatro"],
        [5, "cinco"],
        [6, "seis"],
        [7, "sete"],
        [8, "oito"],
        [9, "nove"],
        [10, "dez"],
        [11, "onze"],
        [12, "meio dia"]
    ]);

    const unidades = new Map([
        [1, "um"], [2, "dois"], [3, "três"], [4, "quatro"], [5, "cinco"],
        [6, "seis"], [7, "sete"], [8, "oito"], [9, "nove"]
    ]);

    const especiais = new Map([
        [10, "dez"], [11, "onze"], [12, "doze"], [13, "treze"], [14, "catorze"],
        [15, "quinze"], [16, "dezasseis"], [17, "dezassete"], [18, "dezoito"], [19, "dezanove"]
    ]);

    function minutosPorExtenso(minuto) {
        if (minuto <= 9) return unidades.get(minuto);
        if (minuto >= 10 && minuto <= 19) return especiais.get(minuto);
        if (minuto >= 20 && minuto <= 29) {
            let uni = minuto - 20;
            return uni === 0 ? "vinte" : "vinte e " + unidades.get(uni);
        }
        return minuto.toString();
    }

    function horaPorExtenso(hora) {
        if (hora === 0 || hora === 24) return numeros.get(0);
        if (hora === 12) return numeros.get(12);
        if (hora > 12) hora -= 12;
        return numeros.get(hora);
    }

    function artigoPara(hora) {
        if (hora === 0 || hora === 24) return "para a";
        if (hora === 12) return "para o";
        return "para as";
    }

    function proximaHora(hora) {
        let nh = (hora + 1) % 24;
        if (nh === 0) return 0;
        if (nh === 12) return 12;
        if (nh > 12) return nh - 12;
        return nh;
    }

    if (m === 0) {
        if (h === 0 || h === 24) return "meia noite em ponto";
        if (h === 12) return "meio dia em ponto";
        return horaPorExtenso(h) + " em ponto";
    }

    if (m === 15) return horaPorExtenso(h) + " e um quarto";
    if (m === 30) return horaPorExtenso(h) + " e meia";
    if (m < 30) return horaPorExtenso(h) + " e " + minutosPorExtenso(m);

    let minutosRestantes = 60 - m;
    let horaSeguinte = proximaHora(h);

    if (minutosRestantes === 15) 
        return "um quarto " + artigoPara(horaSeguinte) + " " + horaPorExtenso(horaSeguinte);

    return minutosPorExtenso(minutosRestantes) + " " + artigoPara(horaSeguinte) + " " + horaPorExtenso(horaSeguinte);
}