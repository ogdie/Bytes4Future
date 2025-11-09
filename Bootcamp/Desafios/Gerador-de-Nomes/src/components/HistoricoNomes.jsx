import React, { useState, useEffect } from "react";
import { getHistorico } from "@/utils/api";

const HistoricoNomes = ({ atualizar }) => {
  const [historico, setHistorico] = useState([]);

  const carregarHistorico = async () => {
    try {
      const lista = await getHistorico();
      setHistorico(lista);
    } catch (error) {
      console.error("Erro ao carregar histórico:", error);
    }
  };

  // Carrega histórico ao montar
  useEffect(() => {
    carregarHistorico();
  }, []);

  // Recarrega histórico sempre que a prop 'atualizar' muda
  useEffect(() => {
    if (atualizar !== undefined) {
      carregarHistorico();
    }
  }, [atualizar]);

  return (
    <div className="p-4 bg-white shadow rounded-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Histórico de Nomes Gerados</h2>

      <ul className="list-decimal list-inside">
        {historico.map((item) => (
          <li key={item._id}>
            {item.nomeCompleto}{" "}
            <span className="text-gray-400 text-sm">
              ({new Date(item.criadoEm).toLocaleString()})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoricoNomes;
