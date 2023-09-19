const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { findById } = require('./find-by-id');
const { insertFinancas } = require('./insert-financas');
const { selectFinancas } = require('./select-financas');
const { insertReceita } = require('./insert-receita');
const { selectReceita } = require('./select-receita');
const { insertInvestimento } = require('./insert-investimento');
const { selectInvestimento } = require('./select-investimento');
const { selecionarInvestimento } = require('./selecionar-investimento');
const { updateInvestimento } = require('./update-investimento');


const app = express();
app.use(cors());
app.use(bodyParser.json());


const endpointListById = '/find-by-id/:id';
const endpointInsertFinancas = '/inserir-financas';
const endpointSelectFinancas = '/select-financas';
const endpointInsertReceita = '/inserir-receita';
const endpointSelectReceita = '/select-receita';
const endpointInsertInvestimento = '/insert-investimento';
const endpointSelectInvestimento = '/select-investimento';
const endpointSelecionarInvestimento = '/selecionar-investimento';
const endpointUpdateInvestimento = '/update-investimento';


app.post(endpointUpdateInvestimento, (req, res) => updateInvestimento(req, res));
app.post(endpointSelecionarInvestimento, (req, res) => selecionarInvestimento(req, res));
app.post(endpointSelectInvestimento, (req, res) => selectInvestimento(req, res));
app.post(endpointInsertInvestimento, (req, res) => insertInvestimento(req, res));
app.post(endpointSelectReceita, (req, res) => selectReceita(req, res));
app.post(endpointSelectFinancas, (req, res) => selectFinancas(req, res));
app.post(endpointInsertReceita, (req, res) => insertReceita(req, res));
app.post(endpointInsertFinancas, (req, res) => insertFinancas(req, res));
app.get(endpointListById, (req, res) => findById(req, res));


app.listen(81, () => {
  console.log('Servidor esta funcionando');
})
