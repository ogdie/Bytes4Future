import React, { useState, useEffect } from "react";
import { getNomes, addNome } from "@/utils/api";

const AdicionarNomes = ({ onNovoNome }) => {
  const [nomes, setNomes] = useState([]);
  const [novoNome, setNovoNome] = useState("");

  // Carrega nomes do backend
  const carregarNomes = async () => {
    try {
      const lista = await getNomes();
      setNomes(lista);
    } catch (error) {
      console.error("Erro ao carregar nomes:", error);
    }
  };

  useEffect(() => {
    carregarNomes();
  }, []);

  // Adiciona um novo nome
  const handleAdicionar = async () => {
    if (!novoNome) return;
    try {
      await addNome(novoNome);
      setNovoNome("");
      carregarNomes(); // atualiza lista
      if (onNovoNome) onNovoNome(); // avisa Home para atualizar listas
    } catch (error) {
      console.error("Erro ao adicionar nome:", error);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">Adicionar Nomes</h2>
      <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
        placeholder="Digite um nome"
        className="border p-2 w-full mb-2 rounded"
      />
      <button
        onClick={handleAdicionar}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Adicionar
      </button>

      <ul className="list-disc list-inside mt-4">
        {nomes.map((item) => (
          <li key={item._id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdicionarNomes;
