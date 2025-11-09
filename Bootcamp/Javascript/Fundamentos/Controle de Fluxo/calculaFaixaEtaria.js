//Cria uma função que recebe como argumento uma idade e retorna a faixa etária.
//Até aos 11 anos (inclusive) - Criança
//Entre os 12 e os 17 anos (inclusive) - Adolescente
//Entre os 18 e os 64 anos (inclusive) - Adulto
//Mais de 65 anos (inclusive) - Sénior

function calculaFaixaEtaria(idade){
    if (idade >= 0 && idade <= 11) {
        return "Criança";
    } else if (idade >= 12 && idade <= 17) {
        return "Adolescente";
    } else if (idade >= 18 && idade <= 64) {
        return "Adulto";
    } else {
        return "Sénior";
    }
}