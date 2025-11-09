// src/pages/api/aulas/dia.js
import { connectDB } from "../../../../lib/mongodb"; // ajuste pro seu mongodb.js
import Aula from "../../../../models/Aula";          // ajuste pro seu modelo Aula.js

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    // Conecta ao MongoDB
    await connectDB();

    // Busca todas as aulas e ordena pelo horário em ordem crescente
    const aulas = await Aula.find({})
      .select("nome data horario objetivo")
      .sort({ horario: 1 });

    res.status(200).json(aulas);
  } catch (error) {
    console.error("Erro ao buscar aulas:", error);
    res.status(500).json({ error: "Erro ao buscar aulas" });
  }
}
