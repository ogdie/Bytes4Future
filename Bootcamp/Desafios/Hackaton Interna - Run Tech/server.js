import express from "express";
import next from "next";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/mongodb.js";
import aulasRouter from "./routes/aulas.js";


dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

async function start() {
  try {
    await connectDB();
    await app.prepare();

    const server = express();
    server.use(cors());
    server.use(express.json());

    // ---------------------------
    // Rotas da API
    // ---------------------------
    server.use("/api/aulas", aulasRouter);

    // ---------------------------
    // Rotas do Next.js (frontend)
    // ---------------------------
    server.get("*", (req, res) => handle(req, res));

    server.listen(port, () => {
      console.log(`🚀 Servidor rodando (Next + Express) em http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Erro ao iniciar o servidor:", err);
    process.exit(1);
  }
}

start();
