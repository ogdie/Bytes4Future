// pages/api/aulas/[id].js
import { connectDB } from "../../../../lib/mongodb";
import Aula from "../../../../models/Aula";

export default async function handler(req, res) {
    const { id } = req.query;
    await connectDB();

    if (req.method === "DELETE") {
        try {
            const aula = await Aula.findById(id);
            if (!aula) return res.status(404).json({ error: "Aula não encontrada" });

            await aula.deleteOne();
            return res.status(200).json({ message: "Aula deletada com sucesso" });
        } catch (error) {
            console.error("Erro ao deletar aula:", error);
            return res.status(500).json({ error: "Erro ao eliminar aula" });
        }
    } else if (req.method === "PUT") {
        try {
            const dados = req.body;
            const aula = await Aula.findByIdAndUpdate(id, dados, { new: true });
            if (!aula) return res.status(404).json({ error: "Aula não encontrada" });

            return res.status(200).json(aula);
        } catch (error) {
            console.error("Erro ao atualizar aula:", error);
            return res.status(500).json({ error: "Erro ao atualizar aula" });
        }
    } else {
        res.setHeader("Allow", ["PUT", "DELETE"]);
        return res.status(405).json({ error: `Método ${req.method} não permitido` });
    }
}
