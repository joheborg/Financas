const { connection } = require("./database-config");

function selectFinancas(req, res) {
    const { IDUsuario, Mes, Ano } = req.body;
    const query = `
    SELECT 
         f.DescricaoDespesa
        ,f.ValorDespesa
        ,tp.tipo 
    FROM  
        Financas as f
    left join
        TipoDespesa as tp on tp.id = f.IDTipoDespesa
    where
        f.IDUsuario = ?
        and f.Mes = ?
        and f.Ano = ?
        `;

    connection.query(query, [IDUsuario, Mes, Ano], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ "data": { result }, "meta": { message: "Dados inseridos com sucesso." } });
        }
    });
}


module.exports = { selectFinancas }