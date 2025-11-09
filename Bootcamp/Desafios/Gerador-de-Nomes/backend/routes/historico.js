// Importa o express
import express from "express";

// Importa o model "Historico", que representa a coleção de histórico de nomes completos
import Historico from "../models/Historico.js";

// Cria o roteador do express para endpoints de histórico
const router = express.Router();

/* 
  POST /api/historico
  Adiciona um nome completo gerado ao histórico
*/
router.post("/", async (req, res) => {
  try {
    // Extrai "nomeCompleto" do corpo da requisição
    const { nomeCompleto } = req.body;

    // Validação: campo obrigatório
    if (!nomeCompleto) {
      return res.status(400).json({ message: "O campo 'nomeCompleto' é obrigatório." });
    }

    // Cria o documento e salva no MongoDB
    const novoRegistro = new Historico({ nomeCompleto });
    await novoRegistro.save();

    // Retorna o registro criado
    res.status(201).json(novoRegistro);
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar ao histórico.", error });
  }
});

/* 
  GET /api/historico
  Retorna todos os nomes completos já gerados, ordenados do mais recente para o mais antigo
*/
router.get("/", async (req, res) => {
  try {
    // Busca todos os documentos e ordena por "criadoEm" descendente
    const historico = await Historico.find().sort({ criadoEm: -1 });
    res.json(historico);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar histórico.", error });
  }
});

// Exporta o roteador
export default router;
