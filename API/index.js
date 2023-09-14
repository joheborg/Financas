const express = require('express');
const cors = require('cors')
const { findById } = require('./find-by-id');
const { insertFinancas } = require('./insert-financas')

const app = express();
app.use(cors())
app.use(express.json())

const endpointListById = '/find-by-id/:id';
const endpointInsertFinancas = '/inserir-financa/';
//const endpointListByUser = '/find-by-user/:nome';


//app.post(endpointInsertLogs, (req, res) => createLog(req, res));
app.post(endpointInsertFinancas, (req, res) => insertFinancas(req, res));
app.get(endpointListById, (req, res) => findById(req, res));

app.listen(81, () => {
  console.log('Servidor esta funcionando')
})
