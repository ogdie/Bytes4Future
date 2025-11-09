import React, { useState, useEffect } from "react";
import { getNomes, getApelidos, addHistorico } from "@/utils/api";

const GerarNomeCompleto = ({ onNovoNome, atualizarListas }) => {
  const [nomes, setNomes] = useState([]);
  const [apelidos, setApelidos] = useState([]);
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [carregado, setCarregado] = useState(false);

  const carregarDados = async () => {
    try {
      const listaNomes = await getNomes();
      const listaApelidos = await getApelidos();
      setNomes(listaNomes);
      setApelidos(listaApelidos);
      setCarregado(true);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  };

  // Atualiza sempre que adicionar nome ou apelido
  useEffect(() => {
    carregarDados();
  }, [atualizarListas]);

  const gerarNome = async () => {
    if (!carregado) return;
    if (nomes.length === 0 || apelidos.length === 0) {
      alert("Adicione pelo menos 1 nome e 1 apelido antes de gerar!");
      return;
    }

    const nomeRandom = nomes[Math.floor(Math.random() * nomes.length)].nome;
    const apelidoRandom = apelidos[Math.floor(Math.random() * apelidos.length)].apelido;
    const completo = `${nomeRandom} ${apelidoRandom}`;

    setNomeCompleto(completo);

    try {
      await addHistorico(completo);
      if (onNovoNome) onNovoNome();
    } catch (error) {
      console.error("Erro ao salvar histórico:", error);
    }
  };

  useEffect(() => {
    const handleEspaco = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        gerarNome();
      }
    };
    window.addEventListener("keydown", handleEspaco);
    return () => window.removeEventListener("keydown", handleEspaco);
  }, [nomes, apelidos, carregado]);

  return (
    <div className="p-4 bg-white shadow rounded-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Gerar Nome Completo</h2>
      <button
        onClick={gerarNome}
        disabled={!carregado}
        className={`px-4 py-2 rounded-md mb-4 ${
          carregado
            ? "bg-purple-500 text-white hover:bg-purple-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Gerar Nome
      </button>
      {nomeCompleto && (
        <div className="text-lg font-semibold mt-2">{nomeCompleto}</div>
      )}
    </div>
  );
};

export default GerarNomeCompleto;
