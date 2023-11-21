const { connection } = require("./database-config");

function selectTipoInvestimento(req, res) {
    const query = `SELECT ID, NOME FROM main.tiposinvestimentos order by nome;`;

    connection.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }else{
            res.status(200).json({ "data": { result }, "meta": { message: "Dados inseridos com sucesso." } });
        }
    });
}
module.exports = { selectTipoInvestimento }