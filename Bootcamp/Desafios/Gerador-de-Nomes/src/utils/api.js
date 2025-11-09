// --------------------------
// Base URL do backend
// --------------------------
const BASE_URL = "http://localhost:5000/api";

// --------------------------
// FUNÇÕES DE NOMES
// --------------------------

// Função para pegar todos os nomes cadastrados
export const getNomes = async () => {
  const res = await fetch(`${BASE_URL}/nomes`); // chama GET /api/nomes
  return res.json(); // retorna a lista de nomes em formato JSON
};

// Função para adicionar um novo nome
export const addNome = async (nome) => {
  const res = await fetch(`${BASE_URL}/nomes`, {
    method: "POST", // método POST para criar
    headers: { "Content-Type": "application/json" }, // envia JSON
    body: JSON.stringify({ nome }), // corpo da requisição { nome: "..." }
  });
  return res.json(); // retorna o documento criado
};

// --------------------------
// FUNÇÕES DE APELIDOS
// --------------------------

// Função para pegar todos os apelidos cadastrados
export const getApelidos = async () => {
  const res = await fetch(`${BASE_URL}/apelidos`); // GET /api/apelidos
  return res.json();
};

// Função para adicionar um novo apelido
export const addApelido = async (apelido) => {
  const res = await fetch(`${BASE_URL}/apelidos`, {
    method: "POST", // POST /api/apelidos
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apelido }),
  });
  return res.json();
};

// --------------------------
// FUNÇÕES DE HISTÓRICO
// --------------------------

// Função para pegar o histórico de nomes completos
export const getHistorico = async () => {
  const res = await fetch(`${BASE_URL}/historico`); // GET /api/historico
  return res.json(); // retorna a lista de nomes completos
};

// Função para adicionar um nome completo ao histórico
export const addHistorico = async (nomeCompleto) => {
  const res = await fetch(`${BASE_URL}/historico`, {
    method: "POST", // POST /api/historico
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nomeCompleto }), // envia { nomeCompleto: "..." }
  });
  return res.json(); // retorna o documento criado
};
