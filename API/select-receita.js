const { connection } = require("./database-config");

function selectReceita(req, res) {
    const { IDUsuario, Mes, Ano } = req.body;
    const query = `SELECT 
        RendaBruta,
        RendaLiquida,
        AuxilioAlimentacao,
        AuxiliosGerais
    FROM
        Receita 
    WHERE
    IDUsuario = ?
    AND Mes = ?
    AND Ano = ?
    UNION ALL

    SELECT 
    'Despesa necessaria',
    sum(valorDespesa),
    '',
    ''
    from Financas
    where
    IDUsuario = ?
    AND Mes = ?
    AND Ano = ?
    AND IDTipoDespesa = 1

    UNION ALL

    SELECT 
    'n.essenciais ',
    sum(valorDespesa),
    '',
    ''
    from Financas
    where
    IDUsuario = ?
    AND Mes = ?
    AND Ano = ?
    AND IDTipoDespesa = 2

    UNION ALL

    SELECT 
    'Investimento',
    sum(valorDespesa),
    '',
    ''
    from Financas
    where
    IDUsuario = ?
    AND Mes = ?
    AND Ano = ?
    AND IDTipoDespesa = 3
    `;

    connection.query(query, [IDUsuario, Mes, Ano, IDUsuario, Mes, Ano, IDUsuario, Mes, Ano, IDUsuario, Mes, Ano], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ "data": { result }, "meta": { message: "Dados inseridos com sucesso." } });
        }
    });
}
module.exports = { selectReceita }