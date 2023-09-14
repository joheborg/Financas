const { connection } = require("./database-config");

function findById(req, res) {
    const { id } = req.params;
    const query = `select * from main.TipoDespesa where id = "${id}";`;

    connection.query(query, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.json(result);
    })
}

module.exports = { findById }