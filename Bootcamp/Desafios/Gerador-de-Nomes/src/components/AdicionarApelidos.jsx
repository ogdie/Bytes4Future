import React, { useState, useEffect } from "react";
import { getApelidos, addApelido } from "@/utils/api";

const AdicionarApelidos = ({ onNovoApelido }) => {
  const [apelidos, setApelidos] = useState([]);
  const [novoApelido, setNovoApelido] = useState("");

  const carregarApelidos = async () => {
    try {
      const lista = await getApelidos();
      setApelidos(lista);
    } catch (error) {
      console.error("Erro ao carregar apelidos:", error);
    }
  };

  useEffect(() => {
    carregarApelidos();
  }, []);

  const handleAdicionar = async () => {
    if (!novoApelido) return;
    try {
      await addApelido(novoApelido);
      setNovoApelido("");
      carregarApelidos();
      if (onNovoApelido) onNovoApelido(); // avisa Home para atualizar listas
    } catch (error) {
      console.error("Erro ao adicionar apelido:", error);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">Adicionar Apelidos</h2>
      <input
        type="text"
        value={novoApelido}
        onChange={(e) => setNovoApelido(e.target.value)}
        placeholder="Digite um apelido"
        className="border p-2 w-full mb-2 rounded"
      />
      <button
        onClick={handleAdicionar}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Adicionar
      </button>

      <ul className="list-disc list-inside mt-4">
        {apelidos.map((item) => (
          <li key={item._id}>{item.apelido}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdicionarApelidos;
