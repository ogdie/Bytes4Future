// pages/api/aulas/index.js
import { connectDB } from "../../../../lib/mongodb";
import Aula from "../../../../models/Aula";

export default async function handler(req, res) {
    await connectDB();

    if (req.method === "POST") {
        try {
            const { nome, objetivo, data, horario } = req.body;

            if (!nome || !data || !horario) {
                return res.status(400).json({ error: "Campos obrigatórios ausentes" });
            }

            const novaAula = await Aula.create({ nome, objetivo, data, horario });
            return res.status(201).json(novaAula);
        } catch (error) {
            console.error("Erro ao adicionar aula:", error);
            return res.status(500).json({ error: "Erro ao adicionar aula" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ error: `Método ${req.method} não permitido` });
    }
}
