const { connection } = require("./database-config");

function updateInvestimento(req, res) {
    const { ID, Mes, Ano, IDUsuario, Cotas, ValorCompra, NomeAtivo, TipoInvestimento } = req.body;
    const query = `UPDATE Investimentos
                    SET
                    Mes = ?
                    ,Ano = ?
                    ,IDUsuario = ?
                    ,Cotas = ?
                    ,ValorCompra = ?
                    ,NomeAtivo = ?
                    ,IDTPInvestimento = (select id from tiposinvestimentos where nome = ?)
                    WHERE
                        ID = ?
                    LIMIT 1;
                    `;

    connection.query(query, [Mes, Ano, IDUsuario, Cotas, ValorCompra, NomeAtivo, TipoInvestimento, ID], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ "data": [{ "ID": result.insertId }], "meta": { message: "Dados atualizados com sucesso." } });
        }
    });
}
module.exports = { updateInvestimento }