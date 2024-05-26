const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o pacote cors
const app = express();
const PORT = 3000; // Porta do servidor Node.js

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use o middleware cors

let estados = [];

// Rotas
app.get('/estados', (req, res) => {
  res.json(estados);
});

app.post('/estados', (req, res) => {
  const estado = req.body;
  estados.push(estado);
  res.status(201).json(estado);
});

app.delete('/estados/:nome', (req, res) => {
  const { nome } = req.params;
  estados = estados.filter(estado => estado.nome !== nome);
  res.status(200).send(`Estado com nome ${nome} foi removido.`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
