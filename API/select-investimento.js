const { connection } = require("./database-config");

function selectInvestimento(req, res) {
    const query = `SELECT ID, NomeAtivo, Cotas, ValorCompra FROM Investimentos;`;

    connection.query(query,  (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ "data": { result }, "meta": { message: "Dados inseridos com sucesso." } });
        }
    });
}
module.exports = { selectInvestimento }