//A fórmula resolvente serve para resolver equações de segundo grau.
//Neste exercício deves implementar a função formulaResolvente que recebe 3 argumentos: a, b e c.
//Se a equação tiver solução, deves retornar um array com as soluções possíveis. 
//No indíce 0 deve estar a solução que resulta da utilização do -, e no índice 1 deve estar 
//solução que resulta da utilização do +
//Se a equação não tiver solução, deves retornar o texto "Sem Solução".
function formulaResolvente(a, b, c) {
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        return ("Sem Solução");
    }

    let raizDelta = Math.sqrt(delta);
    let x1 = (-b - raizDelta) / (2 * a);
    let x2 = (-b + raizDelta) / (2 * a);

    return [x1, x2];
}