// src/pages/api/aulas/data/[data].js
import { connectDB } from "../../../../../lib/mongodb"; // ajuste conforme seu lib
import Aula from "../../../../../models/Aula";

export default async function handler(req, res) {
  const { data } = req.query; // data vem da URL, ex: /api/aulas/data/2025-10-25

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    await connectDB();

    // Busca todas as aulas da data selecionada
    const aulas = await Aula.find({ data: data }).sort({ horario: 1 }); // ordena pelo horário

    res.status(200).json(aulas);
  } catch (error) {
    console.error("Erro ao buscar aulas da data:", error);
    res.status(500).json({ error: "Erro ao buscar aulas da data" });
  }
}
