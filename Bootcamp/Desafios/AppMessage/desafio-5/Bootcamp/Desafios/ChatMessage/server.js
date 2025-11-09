const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // Permite conexões de outros domínios (ex: localhost:3000)
app.use(express.json()); // Permite ler JSON no corpo das requisições

// Caminho para o arquivo chat.json
const chatFilePath = path.join(__dirname, 'chat.json');

// Função para carregar as mensagens do arquivo
const loadChatData = () => {
    try {
        const data = fs.readFileSync(chatFilePath);
        return JSON.parse(data);
    } catch (err) {
        console.error('Erro ao ler chat.json:', err);
        return { messages: [] };
    }
};

// Função para salvar mensagens no arquivo
const saveChatData = (data) => {
    try {
        fs.writeFileSync(chatFilePath, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Erro ao salvar chat.json:', err);
    }
};

// GET /api/users
// Retorna os usuários que conversaram com 'beatriz'
app.get('/api/users', (req, res) => {
    const data = loadChatData();
    const users = new Set();

    data.messages.forEach(message => {
        if (message.from === 'beatriz') {
            users.add(message.to);
        }
        if (message.to === 'beatriz') {
            users.add(message.from);
        }
    });

    res.json([...users]);
});

// GET /api/chat/:user
// Retorna mensagens entre 'beatriz' e o usuário
app.get('/api/chat/:user', (req, res) => {
    const { user } = req.params;
    const data = loadChatData();

    const messages = data.messages.filter(
        msg =>
            (msg.from === 'beatriz' && msg.to === user) ||
            (msg.to === 'beatriz' && msg.from === user)
    );

    messages.sort((a, b) => a.dateInMs - b.dateInMs);
    res.json(messages);
});

// POST /api/chat/send
// Envia nova mensagem de 'beatriz' para um usuário
app.post('/api/chat/send', (req, res) => {
    const { to, content } = req.body;

    if (!to || !content) {
        return res.status(400).json({ error: 'Campos "to" e "content" são obrigatórios.' });
    }

    const data = loadChatData();

    const newMessage = {
        from: 'beatriz',
        to,
        content,
        dateInMs: Date.now()
    };

    data.messages.push(newMessage);
    saveChatData(data);

    res.status(200).json(newMessage);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor backend rodando na porta ${PORT}`);
});
