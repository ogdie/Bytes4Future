//Cria uma função que recebe uma data e uma língua como argumentos e a retorna o dia da semana por extenso.
//As línguas suportadas são português (pt) e inglês (en)
//Dias da semana em português: segunda-feira, terça-feira, quarta-feira, quinta-feira, sexta-feira, sábado e domingo.
//Dias da semana em inglês: monday, tuesday, wednesday, thursday, friday, saturday, sunday.
function diaDaSemanaPorExtensoBilingue(data, lingua){
    const diaIndice = data.getDay();

    const diasSemana = {
        "pt": ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
        "en": ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    };

    const dias = diasSemana[lingua] || diasSemana["pt"];

    return dias[diaIndice];
} 