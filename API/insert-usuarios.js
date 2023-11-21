const { connection } = require("./database-config");

function insertUsuario(req, res) {
    const { Apelido, Nome, Sobrenome, Email, Senha } = req.body;

    const queryVerificarApelido = 'SELECT id FROM main.usuarios WHERE apelido = ?';
    connection.query(queryVerificarApelido, [Apelido], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.length > 0) {
            res.status(400).json({ message: "Apelido já cadastrado no banco de dados." });
        } else {
            const queryVerificarEmail = 'SELECT id FROM main.usuarios WHERE email = ?';
            connection.query(queryVerificarEmail, [Email], (err, result) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else if (result.length > 0) {
                    res.status(400).json({ message: "Email já cadastrado no banco de dados." });
                } else {
                    const queryCadastrar = `INSERT INTO main.usuarios (Apelido, Nome, Sobrenome, Email, Senha)
                        VALUES (?, ?, ?, ?, SHA2(?, 256))`;

                    connection.query(queryCadastrar, [Apelido, Nome, Sobrenome, Email, Senha], (err, result) => {
                        if (err) {
                            res.status(500).json({ error: err.message });
                        } else {
                            res.status(201).json({ message: "Usuário cadastrado com sucesso." });
                        }
                    });
                }
            });
        }
    });
}

module.exports = { insertUsuario };
