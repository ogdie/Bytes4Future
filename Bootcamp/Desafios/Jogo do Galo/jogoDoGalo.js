class JogoDoGalo {
    constructor(tabuleiro, jogadorAtual) {
        this.tabuleiro = tabuleiro || [
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"],
        ];
        this.jogadorAtual = jogadorAtual || "X";
    }

    adicionarJogada(linha, coluna) {
    if (this.tabuleiro[linha][coluna] === "_") {
        const novoTabuleiro = this.tabuleiro.map(linha => [...linha]);
        novoTabuleiro[linha][coluna] = this.jogadorAtual;
        this.jogadorAtual = this.jogadorAtual === "X" ? "O" : "X";
        return new JogoDoGalo(novoTabuleiro, this.jogadorAtual);
    }
    return this;
}


    obterJogadasPossiveis() {
        const jogadas = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.tabuleiro[i][j] === "_") {
                    jogadas.push({ linha: i, coluna: j });
                }
            }
        }
        return jogadas;
    }

    verificarVencedor() {
        const t = this.tabuleiro;

        // Linhas
        for (let i = 0; i < 3; i++) {
            if (t[i][0] !== "_" && t[i][0] === t[i][1] && t[i][1] === t[i][2]) {
                return t[i][0];
            }
        }

        // Colunas
        for (let j = 0; j < 3; j++) {
            if (t[0][j] !== "_" && t[0][j] === t[1][j] && t[1][j] === t[2][j]) {
                return t[0][j];
            }
        }

        // Diagonal principal
        if (t[0][0] !== "_" && t[0][0] === t[1][1] && t[1][1] === t[2][2]) {
            return t[0][0];
        }

        // Diagonal secundária
        if (t[0][2] !== "_" && t[0][2] === t[1][1] && t[1][1] === t[2][0]) {
            return t[0][2];
        }

        return undefined;
    }

    verificarFimDoJogo() {
        return this.verificarVencedor() !== undefined || this.obterJogadasPossiveis().length === 0;
    }
}

let jogo = new JogoDoGalo();
//Preenchi o tabuleiro até ter um vencedor para efeito de verificações.
jogo = jogo.adicionarJogada(0, 0);
jogo = jogo.adicionarJogada(1, 0);
jogo = jogo.adicionarJogada(0, 1);
jogo = jogo.adicionarJogada(2, 0);
jogo = jogo.adicionarJogada(0, 2);
for (let linha of jogo.tabuleiro) {
    console.log(linha);
}

console.log("Jogador atual:", jogo.jogadorAtual);

console.log("Jogadas possíveis:", jogo.obterJogadasPossiveis());
console.log("Vencedor:", jogo.verificarVencedor());
console.log("Fim do jogo?", jogo.verificarFimDoJogo());
