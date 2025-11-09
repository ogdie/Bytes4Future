function encontraUltimaVelaAcesa(velas) {
    for (let i = velas.length - 1; i >= 0; i--) {
        if (velas[i] === true) {
            return i;
        }
    }
    return -1;
}