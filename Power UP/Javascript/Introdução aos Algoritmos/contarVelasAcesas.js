function contaVelasAcesas(velas) {
    let contador = 0;
    for (let i = 0; i < velas.length; i++) {
        if (velas[i] === true) {
            contador++;
        }
    }
    return contador;
}
