const { connection } = require("./database-config");

function insertInvestimento(req, res) {
    const { ID, Mes, Ano, IDUsuario, Cotas, ValorCompra, NomeAtivo, TipoInvestimento } = req.body;
    const query = `INSERT INTO Investimentos (Mes, Ano, IDUsuario, Cotas, ValorCompra, NomeAtivo, IDTPInvestimento)
        VALUES (?, ?, ?, ?, ?, UPPER( ? ), (select id from tiposinvestimentos where nome = ?));`;

    connection.query(query, [Mes, Ano, IDUsuario, Cotas, ValorCompra, NomeAtivo, TipoInvestimento], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ "data": [{ "ID": result.insertId }], "meta": { message: "Dados inseridos com sucesso." } });
        }
    });
}
module.exports = { insertInvestimento }