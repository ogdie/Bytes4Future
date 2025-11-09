"use client";

import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTimes } from "react-icons/fa";
import {
  buscarAulasPorDataAPI,
  adicionarAulaAPI,
  atualizarAulaAPI,
  eliminarAulaAPI,
} from "../services/api";

const HORARIOS = [
  "07:00", "08:00", "09:00", "10:00", "11:00",
  "13:00", "14:00", "15:00", "16:00",
  "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
];

export default function DayScheduleModal({ date, onClose }) {
  const [aulas, setAulas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalType, setModalType] = useState(null); // 'add', 'edit', 'delete'
  const [selectedAula, setSelectedAula] = useState(null);
  const [formData, setFormData] = useState({ nome: "", objetivo: "" });

  useEffect(() => {
    if (date) fetchAulas();
  }, [date]);

  const fetchAulas = async () => {
    try {
      setLoading(true);
      const data = await buscarAulasPorDataAPI(date);
      setAulas(data);
    } catch (error) {
      console.error("Erro ao buscar aulas:", error);
    } finally {
      setLoading(false);
    }
  };

  const openAddModal = (horario) => {
    setModalType("add");
    setSelectedAula({ horario });
    setFormData({ nome: "", objetivo: "" });
  };

  const openEditModal = (aula) => {
    setModalType("edit");
    setSelectedAula(aula);
    setFormData({ nome: aula.nome, objetivo: aula.objetivo });
  };

  const openDeleteModal = (aula) => {
    setModalType("delete");
    setSelectedAula(aula);
  };

  const closeSubModal = () => {
    setModalType(null);
    setSelectedAula(null);
    setFormData({ nome: "", objetivo: "" });
  };

  const handleAdd = async () => {
    if (!formData.nome) return;
    await adicionarAulaAPI({
      nome: formData.nome,
      objetivo: formData.objetivo,
      data: date,
      horario: selectedAula.horario,
    });
    closeSubModal();
    fetchAulas();
  };

  const handleEdit = async () => {
    if (!formData.nome) return;
    await atualizarAulaAPI(selectedAula._id, {
      nome: formData.nome,
      objetivo: formData.objetivo,
      data: selectedAula.data,
      horario: selectedAula.horario,
    });
    closeSubModal();
    fetchAulas();
  };

  const handleDelete = async () => {
    await eliminarAulaAPI(selectedAula._id);
    closeSubModal();
    fetchAulas();
  };

  const isOcupado = (horario) => aulas.some((a) => a.horario === horario);

  return (
    <div className="relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl w-full max-w-lg h-auto max-h-[80vh] overflow-y-auto">
      {/* Botão de fechar */}
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
      >
        ×
      </button>

      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-zinc-100">
        {date.split("-").reverse().join("/")}
      </h2>

      {loading ? (
        <p className="text-center text-gray-400">Carregando...</p>
      ) : (
        <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
          {HORARIOS.map((horario) => {
            const aula = aulas.find((a) => a.horario === horario);
            return (
              <div
                key={horario}
                className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-3"
              >
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {horario} - {String(Number(horario.split(":")[0]) + 1).padStart(2, "0")}:00
                </span>

                {aula ? (
                  <div className="flex gap-2 items-center">
                    <span className="text-green-500 text-sm">{aula.nome}</span>
                    <button
                      onClick={() => openEditModal(aula)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => openDeleteModal(aula)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => openAddModal(horario)}
                    className="text-green-600 hover:text-green-700"
                  >
                    <FaPlus />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Submodais */}
      {modalType && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-sm animate-slideUp relative">
            {/* Botão fechar */}
            <button
              onClick={closeSubModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ×
            </button>

            {/* Conteúdo dependendo do tipo */}
            {modalType === "add" && (
              <>
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-zinc-100">
                  Adicionar Aula ({selectedAula?.horario})
                </h3>
                <input
                  type="text"
                  placeholder="Nome do aluno"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full mb-3 p-2 rounded-lg border dark:bg-gray-700 dark:text-gray-100"
                />
                <input
                  type="text"
                  placeholder="Objetivo da aula"
                  value={formData.objetivo}
                  onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                  className="w-full mb-4 p-2 rounded-lg border dark:bg-gray-700 dark:text-gray-100"
                />
                <button
                  onClick={handleAdd}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
                >
                  Salvar
                </button>
              </>
            )}

            {modalType === "edit" && (
              <>
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-zinc-100">
                  Editar Aula
                </h3>
                <input
                  type="text"
                  placeholder="Nome do aluno"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full mb-3 p-2 rounded-lg border dark:bg-gray-700 dark:text-gray-100"
                />
                <input
                  type="text"
                  placeholder="Objetivo da aula"
                  value={formData.objetivo}
                  onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                  className="w-full mb-4 p-2 rounded-lg border dark:bg-gray-700 dark:text-gray-100"
                />
                <button
                  onClick={handleEdit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                >
                  Salvar Alterações
                </button>
              </>
            )}

            {modalType === "delete" && (
              <>
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-zinc-100">
                  Tem certeza que deseja deletar esta aula?
                </h3>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleDelete}
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
                  >
                    Sim
                  </button>
                  <button
                    onClick={closeSubModal}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg"
                  >
                    Cancelar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Animações */}
      <style jsx global>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
}
