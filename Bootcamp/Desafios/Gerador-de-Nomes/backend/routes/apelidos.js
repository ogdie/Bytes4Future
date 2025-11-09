// Importa o express
import express from "express";

// Importa o model "Apelido" que representa a coleção de apelidos no MongoDB
import Apelido from "../models/Apelido.js";

// Cria o roteador do express para endpoints de apelidos
const router = express.Router();

/* 
  POST /api/apelidos
  Adiciona um novo apelido à coleção "apelidos"
*/
router.post("/", async (req, res) => {
  try {
    // Extrai "apelido" do corpo da requisição
    const { apelido } = req.body;

    // Validação: campo obrigatório
    if (!apelido) {
      return res.status(400).json({ message: "O campo 'apelido' é obrigatório." });
    }

    // Cria o documento e salva no MongoDB
    const novoApelido = new Apelido({ apelido });
    await novoApelido.save();

    // Retorna o apelido criado
    res.status(201).json(novoApelido);
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar apelido.", error });
  }
});

/* 
  GET /api/apelidos
  Retorna todos os apelidos cadastrados
*/
router.get("/", async (req, res) => {
  try {
    const apelidos = await Apelido.find();
    res.json(apelidos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar apelidos.", error });
  }
});

// Exporta o roteador
export default router;
