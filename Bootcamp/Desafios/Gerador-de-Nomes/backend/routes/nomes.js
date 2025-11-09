// Importa o express, que cria o roteamento das requisições
import express from "express";

// Importa o model "Nome" que representa a coleção de nomes no MongoDB
import Nome from "../models/Nome.js";

// Cria o roteador do express para definir os endpoints relacionados a nomes
const router = express.Router();

/* 
  POST /api/nomes
  Essa rota adiciona um novo nome à coleção "nomes"
*/
router.post("/", async (req, res) => {
  try {
    // Extrai o campo "nome" do corpo da requisição (JSON enviado pelo frontend)
    const { nome } = req.body;

    // Validação: se não houver nome, retorna erro 400 (bad request)
    if (!nome) {
      return res.status(400).json({ message: "O campo 'nome' é obrigatório." });
    }

    // Cria um novo documento usando o model "Nome"
    const novoNome = new Nome({ nome });

    // Salva o documento no MongoDB
    await novoNome.save();

    // Retorna o novo documento criado com status 201 (created)
    res.status(201).json(novoNome);
  } catch (error) {
    // Em caso de erro no servidor, retorna status 500 e a mensagem de erro
    res.status(500).json({ message: "Erro ao adicionar nome.", error });
  }
});

/* 
  GET /api/nomes
  Essa rota retorna todos os nomes cadastrados na coleção "nomes"
*/
router.get("/", async (req, res) => {
  try {
    // Busca todos os documentos da coleção "nomes"
    const nomes = await Nome.find();

    // Retorna os nomes encontrados
    res.json(nomes);
  } catch (error) {
    // Em caso de erro no servidor, retorna status 500 e a mensagem de erro
    res.status(500).json({ message: "Erro ao buscar nomes.", error });
  }
});

// Exporta o roteador para ser usado no server.js
export default router;
