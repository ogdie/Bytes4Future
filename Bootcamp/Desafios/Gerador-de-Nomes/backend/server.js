// Importa o Express, que permite criar o servidor e rotas
import express from "express";

// Importa o CORS, que permite que o frontend acesse o backend
import cors from "cors";

// Importa dotenv para carregar variáveis de ambiente do arquivo .env
import { config } from "dotenv";

// Importa a função que conecta ao MongoDB
import connectDB from "./config/db.js";

// Importa as rotas que criamos
import nomesRoutes from "./routes/nomes.js";
import apelidosRoutes from "./routes/apelidos.js";
import historicoRoutes from "./routes/historico.js";

// Carrega as variáveis do .env
config();

// Conecta ao MongoDB Atlas
connectDB();

// Cria a instância do Express
const app = express();

// Configura o CORS para permitir requisições do frontend
app.use(cors());

// Permite que o backend receba JSON no corpo das requisições
app.use(express.json());

// Configura as rotas do backend
app.use("/api/nomes", nomesRoutes);
app.use("/api/apelidos", apelidosRoutes);
app.use("/api/historico", historicoRoutes);

// Define a porta do servidor (ou pega do .env)
const PORT = process.env.PORT || 5000;

// Inicia o servidor e exibe uma mensagem no console
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
