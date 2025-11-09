// pages/perfil.js
"use client";

import React, { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';
// Reutiliza os componentes que você usa na Home
import Navbar from '../components/Navbar';
import Header from '../components/Header';

// configuração da fonte Poppins 
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// --- Componente Reutilizável de Input ---
const ProfileInput = ({ label, id, value, onChange, readOnly }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-black mb-1 text-left">
      {label}
    </label>
    <input
      type="text"
      id={id}
      name={id}
      value={value || ''}
      onChange={onChange}
      readOnly={readOnly}
      // Estilo de input que combina com a paleta da sua Home
      className={`w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition
        ${readOnly
          ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed border-none'
          : 'bg-gray-700 text-white border border-gray-300 dark:border-gray-700'
        }
      `}
    />
  </div>
);

// --- Componente Principal ---
export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const userPhotoUrl = "img/foto ramom.jpg";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // const response = await axios.get('/api/user'); 
        // Simulação de dados para visualização e edição:
        const mockResponse = {
          name: 'Ramon Dinamo',
          email: 'ramon.dinamo@gmail.com',
          phone: '(351) 99999-9999',
          dateJoined: '2024' // Dado fixo
        };
        setUserData(mockResponse);
        setEditData(mockResponse);
      } catch (err) {
        setError('Erro ao carregar os dados do usuário.');
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);
    try {
      // const response = await axios.put('/api/user', editData); 
      // setUserData(response.data); 

      // Simulação:
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUserData(editData);

      setIsEditing(false);
    } catch (err) {
      setError('Erro ao salvar as alterações. Tente novamente.');
    } finally {
      setIsSaving(false);
    }
  };

  // --- Early Returns para UX ---
  if (loading) {
    return (
      <div className={`${poppins.className} flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black text-black dark:text-zinc-50`}>
        Carregando...
      </div>
    );
  }
  if (error && !isSaving && !isEditing) {
    return (
      <div className={`${poppins.className} flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black text-red-500`}>
        {error}
      </div>
    );
  }

  return (
    <div
      className={`${poppins.className} flex min-h-screen items-center justify-center`}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-8 px-4 sm:py-16 sm:px-8 md:py-24 md:px-12 lg:py-32 lg:px-16">

        {/* REUTILIZAÇÃO COMPONENTES */}
        <Header />

        <div className="flex flex-col items-center gap-6 text-center w-full max-w-lg px-4 sm:px-0">

          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-4">
            Meu Perfil
          </h1>

          {/* FOTO DO PERFIL E DADOS FIXOS */}
          <div className="flex flex-col items-center gap-4 mb-6 mt-6">
            <img
              src={userPhotoUrl}
              alt="Foto do Usuário"
              className="w-24 h-24 rounded-full object-cover border-4 border-green-600 dark:border-green-400 shadow-lg"
            />
            <p className="text-sm text-gray-300 dark:text-zinc-300">
              Membro desde: <strong className="font-medium">{userData.dateJoined}</strong>
            </p>
          </div>

          <form onSubmit={handleSave} className="w-full max-w-sm shadow-md rounded-lg p-4 bg-gray-200 border border-gray-300 border-l-4 border-l-green-500">

            <h2 className="text-xl font-semibold mb-4 text-left text-black">
              Informações Pessoais
            </h2>

            {/* Campos Editáveis */}
            <ProfileInput
              label="Nome Completo"
              id="name"
              value={editData.name}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />

            <ProfileInput
              label="E-mail"
              id="email"
              value={editData.email}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />

            <ProfileInput
              label="Telefone"
              id="phone"
              value={editData.phone}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />

            {/* Área de Ações (Botões) */}
            <div className="mt-8 flex justify-end gap-3">

              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setEditData(userData);
                      setIsEditing(false);
                      setError(null);
                    }}
                    className="px-4 py-2 text-sm font-semibold rounded-lg text-black border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg text-black transition
                                ${isSaving ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}
                            `}
                  >
                    {isSaving ? 'Salvando...' : 'Salvar'}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-green-600 text-black hover:bg-green-700 transition"
                >
                  Editar Perfil
                </button>
              )}
            </div>

            {error && isSaving === false && (
              <p className="mt-4 text-sm text-red-500 text-center">
                {error}
              </p>
            )}

          </form>
        </div>

        {/* REUTILIZAÇÃO DO SEU COMPONENTE */}
        <Navbar />
      </main>
    </div>
  );
}