//Cria uma função que recebe uma data como argumento e a retorna o mês por extenso.
function mesPorExtenso(data){
    let mesesDoAno = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ]

    let mesPorExtenso = mesesDoAno[data.getMonth()];
    return mesPorExtenso;
}