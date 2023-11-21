const { connection } = require("./database-config");

function insertFinancas(req, res) {
    const { IDUsuario, DescricaoDespesa, ValorDespesa, IDTipoDespesa, Mes, Ano } = req.body;

    const query = `INSERT INTO Financas (IDUsuario, DescricaoDespesa, ValorDespesa, IDTipoDespesa, Mes, Ano)
        VALUES (?, ?, ?, ( SELECT ID FROM TipoDespesa WHERE Tipo = ?), ?, ?);`;

    connection.query(query, [IDUsuario, DescricaoDespesa, ValorDespesa, IDTipoDespesa, Mes, Ano], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ "data": { "ID": result.insertId }, "meta": { message: "Dados inseridos com sucesso." } });
        }
    });
}


module.exports = { insertFinancas }