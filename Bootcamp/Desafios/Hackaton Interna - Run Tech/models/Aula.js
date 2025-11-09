// models/Aula.js
import mongoose from 'mongoose';

const aulaSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, 'O nome é obrigatório'],
      trim: true,
    },
    horario: {
      type: String,
      default: '----', // se não passar, mostra ----
    },
    data: {
      type: String,
      default: '----', // podemos colocar como string simples
    },
    objetivo: {
      type: String,
      default: '----', // se não passar, mostra ----
      trim: true,
    },
  },
  { timestamps: true }
);

// Evita OverwriteModelError
const Aula = mongoose.models.Aula || mongoose.model('Aula', aulaSchema);

export default Aula;
