//Cria uma função que recebe uma data e uma língua como argumentos e a retorna o mês por extenso.
function mesPorExtensoBilingue(data, lingua){
    const mesIndice = data.getMonth();

    const meses = {
        "pt": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
               "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        "en": ["January", "February", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December"]
    };

    const listaMeses = meses[lingua] || meses["pt"];

    return listaMeses[mesIndice];
} 