// routes/aulas.js
import express from "express";
import Aula from "../models/Aula.js";

const router = express.Router();

// Helper para data atual
const hoje = () => {
  const data = new Date();
  data.setHours(0, 0, 0, 0);
  return data;
};

// GET → aulas do dia atual (Home)
router.get("/dia", async (req, res) => {
  try {
    const dataAtual = hoje();
    const proximoDia = new Date(dataAtual);
    proximoDia.setDate(proximoDia.getDate() + 1);

    const aulas = await Aula.find({
      data: { $gte: dataAtual, $lt: proximoDia },
    }).sort({ horario: 1 });

    res.json(aulas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET → aulas de uma data específica (Calendário)
router.get("/data/:data", async (req, res) => {
  try {
    const { data } = req.params;
    const inicio = new Date(data);
    inicio.setHours(0, 0, 0, 0);

    const fim = new Date(inicio);
    fim.setDate(fim.getDate() + 1);

    const aulas = await Aula.find({
      data: { $gte: inicio, $lt: fim },
    }).sort({ horario: 1 });

    res.json(aulas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST → criar nova aula
router.post("/", async (req, res) => {
  const { nome, horario, data, objetivo } = req.body;

  try {
    const novaAula = new Aula({ nome, horario, data, objetivo });
    await novaAula.save();
    res.status(201).json(novaAula);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT → editar aula por ID
router.put("/:id", async (req, res) => {
  const { nome, horario, data, objetivo } = req.body;

  try {
    const aula = await Aula.findById(req.params.id);
    if (!aula) return res.status(404).json({ message: "Aula não encontrada" });

    aula.nome = nome || aula.nome;
    aula.horario = horario || aula.horario;
    aula.data = data || aula.data;
    aula.objetivo = objetivo || aula.objetivo;

    await aula.save();
    res.json(aula);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE → deletar aula por ID
router.delete("/:id", async (req, res) => {
  try {
    const aula = await Aula.findByIdAndDelete(req.params.id);
    if (!aula) return res.status(404).json({ message: "Aula não encontrada" });
    res.json({ message: "Aula deletada", aula });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
