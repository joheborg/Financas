const { connection } = require("./database-config");

function updateInvestimento(req, res) {
    const { ID, Mes, Ano, IDUsuario, Cotas, ValorCompra, NomeAtivo } = req.body;
    const query = `UPDATE Investimentos
                    SET
                    Mes = ?
                    ,Ano = ?
                    ,IDUsuario = ?
                    ,Cotas = ?
                    ,ValorCompra = ?
                    ,NomeAtivo = ?
                    WHERE
                        ID = ?
                    LIMIT 1;
                    `;

    connection.query(query, [Mes, Ano, IDUsuario, Cotas, ValorCompra, NomeAtivo, ID], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ "data": [{ "ID": result.insertId }], "meta": { message: "Dados atualizados com sucesso." } });
        }
    });
}
module.exports = { updateInvestimento }