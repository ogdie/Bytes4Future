import { useJogoDoGalo } from "./useJogoDoGalo.js";
import "./JogoDoGalo.css";

export default function JogoDoGalo() {
  const { jogo, verificarFimDoJogo, verificarVencedor, adicionarJogada, reiniciarJogo } = useJogoDoGalo();

  const fimDeJogo = verificarFimDoJogo(jogo);
  const vencedor = verificarVencedor(jogo);

  return (
    <div className="jogo-container">
      <h1>Jogo do Leão</h1>

      {!fimDeJogo ? (
        <>
          <h2>
            <div className="vez-jogador">
              <span>Vez do Jogador:</span>
              {jogo.jogadorAtual === "X" && (
                <img src="/img/kovu2.jpg" alt="Kovu" className="icone-jogador" />
              )}
              {jogo.jogadorAtual === "O" && (
                <img src="/img/nala.jpg" alt="Nala" className="icone-jogador" />
              )}
            </div>
          </h2>

          <div className="tabuleiro">
            {jogo.tabuleiro.map((linha, i) => (
              <div key={i} className="linha">
                {linha.map((casa, j) => (
                  <button
                    key={j}
                    className="casa"
                    onClick={() => {
                      if (casa === " " && !fimDeJogo) {
                        adicionarJogada(jogo, jogo.jogadorAtual, i, j);
                      }
                    }}
                  >
                    {casa === "X" && (
                      <img
                        src="/img/kovu2.jpg"
                        alt="Kovu"
                        className="icone-jogador"
                      />
                    )}
                    {casa === "O" && (
                      <img
                        src="/img/nala.jpg"
                        alt="Nala"
                        className="icone-jogador"
                      />
                    )}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="resultado-final">
          {vencedor ? (
            <div className="vencedor-container">
              <h2>Vencedor:</h2>
              {vencedor === "X" && (
                <img src="/img/kovu2.jpg" alt="Kovu" className="icone-vencedor" />
              )}
              {vencedor === "O" && (
                <img src="/img/nala.jpg" alt="Nala" className="icone-vencedor" />
              )}
            </div>
          ) : (
            <div className="vencedor-container">
              <h2>Empate! Ninguém venceu.</h2>
              <img src="/img/tp.jpg" alt="Timão e Pumba" className="icone-vencedor" />
            </div>
          )}

          <button className="btn-reiniciar" onClick={reiniciarJogo}>
            <img src="/img/botao.jpg" alt="Reiniciar" className="icone-pata" />
          </button>
        </div>
      )}
    </div>
  );
}
