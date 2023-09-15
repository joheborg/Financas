const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { findById } = require('./find-by-id');
const { insertFinancas } = require('./insert-financas');
const { selectFinancas } = require('./select-financas');
const { insertReceita } = require('./insert-receita');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const endpointListById = '/find-by-id/:id';
const endpointInsertFinancas = '/inserir-financas';
const endpointSelectFinancas = '/select-financas';
const endpointInsertReceita = '/inserir-receita';


app.post(endpointSelectFinancas, (req, res) => selectFinancas(req, res));
app.post(endpointInsertReceita, (req, res) => insertReceita(req, res));
app.post(endpointInsertFinancas, (req, res) => insertFinancas(req, res));
app.get(endpointListById, (req, res) => findById(req, res));

app.listen(81, () => {
  console.log('Servidor esta funcionando');
})
