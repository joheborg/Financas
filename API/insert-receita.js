const { connection } = require("./database-config");

function insertReceita(req, res) {
    const { IDUsuario, RendaBruta, RendaLiquida, AuxilioAlimentacao, AuxiliosGerais, Mes, Ano } = req.body;
    const query = `INSERT INTO Receita (IDUsuario, RendaBruta, RendaLiquida, AuxilioAlimentacao, AuxiliosGerais, Mes, Ano)
        VALUES (?, ?, ?, ?, ?, ?, ?);`;

    connection.query(query, [IDUsuario, RendaBruta, RendaLiquida, AuxilioAlimentacao, AuxiliosGerais, Mes, Ano], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ "data": [{ "ID": result.insertId }], "meta": { message: "Dados inseridos com sucesso." } });
        }
    });
}
module.exports = { insertReceita }