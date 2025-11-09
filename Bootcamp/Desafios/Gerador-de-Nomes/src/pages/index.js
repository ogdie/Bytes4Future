import React, { useState } from "react";
import AdicionarNomes from "@/components/AdicionarNomes";
import AdicionarApelidos from "@/components/AdicionarApelidos";
import GerarNomeCompleto from "@/components/GerarNomeCompleto";
import HistoricoNomes from "@/components/HistoricoNomes";

const Home = () => {
  // Estado para disparar atualização do histórico
  const [atualizarHistorico, setAtualizarHistorico] = useState(false);
  // Estado para disparar atualização das listas de nomes/apelidos
  const [atualizarListas, setAtualizarListas] = useState(false);

  // Chamado quando um novo nome ou apelido é adicionado
  const handleNovoCadastro = () => {
    setAtualizarListas(prev => !prev); // alterna estado para atualizar listas no GerarNomeCompleto
  };

  // Chamado quando um novo nome completo é gerado
  const handleNovoNome = () => {
    setAtualizarHistorico(prev => !prev); // alterna estado para atualizar histórico
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl text-gray-600 mb-2">O Primeiro Desafio Fullstack</h2>
        <h1 className="text-4xl font-bold text-gray-800">Gerador de Nomes</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Passa a função de callback para atualizar listas */}
        <AdicionarNomes onNovoNome={handleNovoCadastro} />
        <AdicionarApelidos onNovoApelido={handleNovoCadastro} />

        {/* Passa a prop atualizarListas para recarregar nomes/apelidos */}
        <GerarNomeCompleto onNovoNome={handleNovoNome} atualizarListas={atualizarListas} />

        {/* Passa o estado atualizarHistorico para recarregar histórico */}
        <HistoricoNomes atualizar={atualizarHistorico} />
      </div>
    </div>
  );
};

export default Home;
