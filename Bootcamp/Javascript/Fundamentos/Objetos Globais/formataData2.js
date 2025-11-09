//Cria uma função que recebe uma data como argumento e a retorna com o formato: dd-mm-aaaa.
function formataData(data){
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();

    if (dia < 10) dia = '0' + dia;
    if (mes < 10) mes = '0' + mes;

    return `${dia}-${mes}-${ano}`
} 