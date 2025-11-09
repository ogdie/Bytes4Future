function tempoEmPalavras(h, m) {
    const numeros = {
        0: "meia noite",
        1: "uma",
        2: "duas",
        3: "três",
        4: "quatro",
        5: "cinco",
        6: "seis",
        7: "sete",
        8: "oito",
        9: "nove",
        10: "dez",
        11: "onze",
        12: "meio dia"
    };

    function minutosPorExtenso(minuto) {
        const unidades = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
        const especiais = {
            10: "dez",
            11: "onze",
            12: "doze",
            13: "treze",
            14: "catorze",
            15: "quinze",
            16: "dezasseis",
            17: "dezassete",
            18: "dezoito",
            19: "dezanove"
        };

        if (minuto <= 9) return unidades[minuto];
        if (minuto >= 10 && minuto <= 19) return especiais[minuto];
        if (minuto >= 20 && minuto <= 29) {
            let uni = minuto - 20;
            if (uni === 0) return "vinte";
            else return "vinte e " + unidades[uni];
        }
        return minuto.toString();
    }

    function horaPorExtenso(hora) {
        if (hora === 0 || hora === 24) return numeros[0];
        if (hora === 12) return numeros[12];
        if (hora > 12) hora -= 12;
        return numeros[hora];
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

    if (m === 15) {
        return horaPorExtenso(h) + " e um quarto";
    }

    if (m === 30) {
        return horaPorExtenso(h) + " e meia";
    }

    if (m < 30) {
        return horaPorExtenso(h) + " e " + minutosPorExtenso(m);
    }

    let minutosRestantes = 60 - m;
    let horaSeguinte = proximaHora(h);

    if (minutosRestantes === 15) {
        return "um quarto " + artigoPara(horaSeguinte) + " " + horaPorExtenso(horaSeguinte);
    }

    return minutosPorExtenso(minutosRestantes) + " " + artigoPara(horaSeguinte) + " " + horaPorExtenso(horaSeguinte);
}
