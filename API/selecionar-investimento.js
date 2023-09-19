const { connection } = require("./database-config");

function selecionarInvestimento(req, res) {
    const { ID } = req.body;
    const query = `SELECT ID, NomeAtivo, Cotas, ValorCompra FROM Investimentos WHERE ID = ? LIMIT 1;`;

    connection.query(query, [ID], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ "data": { result }, "meta": { message: "Dados inseridos com sucesso." } });
        }
    });
}
module.exports = { selecionarInvestimento }