//Cria uma função que recebe como argumento um número m e retorna o mês correspondente.
//Correspondências:
//1 - Janeiro
//2 - Fevereiro
//3 - Março
//4 - Abril
//5 - Maio
//6 - Junho
//7 - Julho
//8 - Agosto
//9 - Setembro
//10 - Outubro
//11 - Novembro
//12 - Dezembro
//Quando recebe um número diferente deve retornar a mensagem: "Número inválido. Por favor insira um número entre 1 e 12."
function mesesDoAno(m) {
    switch(m) {
        case 1:
            return "Janeiro";
            break;
        case 2:
            return "Fevereiro";
            break;
        case 3:
            return "Março";
            break;
        case 4:
            return "Abril";
            break;
        case 5:
            return "Maio";
            break;
        case 6:
            return "Junho";
            break;
        case 7:
            return "Julho";
            break;
        case 8:
            return "Agosto";
            break;
        case 9:
            return "Setembro";
            break;
        case 10:
            return "Outubro";
            break;
        case 11:
            return "Novembro";
            break;
        case 12:
            return "Dezembro";
            break;
        default:
            return "Número inválido. Por favor insira um número entre 1 e 12."
    }
}