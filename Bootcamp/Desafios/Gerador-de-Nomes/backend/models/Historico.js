// Importa o mongoose
import mongoose from "mongoose";

// Cria o Schema para a coleção "historico"
const HistoricoSchema = new mongoose.Schema({
  // Cada documento terá um campo "nomeCompleto" do tipo String, obrigatório
  nomeCompleto: { type: String, required: true },

  // "criadoEm" vai armazenar a data de criação do registro
  // Se não for informado, será usado automaticamente Date.now (data/hora atual)
  criadoEm: { type: Date, default: Date.now },
});

// Cria o Model "Historico" baseado no Schema
// Representa a coleção "historico" no MongoDB
export default mongoose.model("Historico", HistoricoSchema);
