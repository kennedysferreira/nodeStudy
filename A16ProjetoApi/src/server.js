const porta = 3003;

const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.getProdutos()); //vai converter automaticamente para json
});

app.get("/produtos/:id", (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
    quantidade: req.body.quantidade,
  });
  res.send(produto);
});

app.delete("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.deleteProduto(req.params.id);
  res.send(produto);
});

app.listen(porta, () => {
  console.log(`Servidor esta executando na porta ${porta}`);
});
