const { connection } = require("./database-config");

function selectUsuario(req, res) {
    const { Apelido, Senha } = req.body;
    const query = `SELECT id FROM main.usuarios WHERE apelido = ? and senha = SHA2( ? ,256);`;
    connection.query(query, [Apelido, Senha], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }else if(result[0] ==  undefined) {
            res.status(200).json({ "data": null, "meta": { message: "Verificação falhou." } });
        }else if (result[0].id > 0){
            res.status(200).json({ "data": {"ID": result[0].id}, "meta": { message: "Verificação com sucesso." } });
        }
    });
}
module.exports = { selectUsuario }