"use client";
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Card from '../components/Cards';
import { Poppins } from "next/font/google";
import { buscarAulasDoDiaAPI } from "../services/api.js";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const [aulasDoDia, setAulasDoDia] = useState([]);
  const userComment = "Professor dedicado e atencioso, sempre preocupado com o progresso dos alunos. Recomendo muito!";

  useEffect(() => {
    async function carregarAulas() {
      try {
        const aulas = await buscarAulasDoDiaAPI();
        setAulasDoDia(aulas);
      } catch (error) {
        console.error(error);
      }
    }
    carregarAulas();
  }, []);

  return (
    <div className={`${poppins.className} flex min-h-screen items-center justify-center`}>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <Header />

        <div className="flex flex-col items-center gap-6 text-center sm:text-left w-full">
          <h1 className="max-w-xs text-3xl leading-10 tracking-tight text-gray-100">
            Suas Aulas de Hoje
          </h1>

          {/* Container centralizado para os Cards */}
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            {aulasDoDia.length > 0 ? (
              aulasDoDia.map(aula => (
                <Card
                  key={aula._id}
                  nome={aula.nome}
                  horario={aula.horario || '----'}
                  data={aula.data || '----'}
                  objetivo={aula.objetivo || '----'}
                />
              ))
            ) : (
              <p className="text-zinc-600 dark:text-zinc-400">Nenhuma aula agendada para hoje.</p>
            )}
          </div>

         

          <div className="mt-8 w-full text-center">
            <h2 className="text-2xl font-semibold leading-8 tracking-tight text-gray-100 dark:text-zinc-50 mb-4">
              Avaliações
            </h2>
            <div className="mb-2">
              <span className="text-yellow-500 text-2xl block">★★★★★</span>
              <span className="text-lg text-gray-100 dark:text-zinc-300 block">5/5 Estrelas</span>
            </div>
            <p className="max-w-md mx-auto text-base leading-6 text-gray-100 dark:text-zinc-400 italic">
              "{userComment}"
            </p>
          </div>
        </div>

        <Navbar />
      </main>
    </div>
  );
}