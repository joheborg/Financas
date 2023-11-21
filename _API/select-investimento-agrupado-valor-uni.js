const { connection } = require("./database-config");

function selectInvestimentoAgrupadoVAlorUni(req, res) {
    const query = `SELECT I.NomeAtivo, SUM(I.Cotas) AS Cotas, (SUM(I.ValorCompra) / SUM(I.Cotas)) AS ValorCompra , I.TPinvest AS TPinvest
                    FROM 
                        (SELECT ID, NomeAtivo, Cotas, (SUM(Cotas) * ValorCompra) AS ValorCompra, (select nome from tiposinvestimentos where id = IDTPInvestimento) as TPinvest FROM Investimentos GROUP BY ID, NomeAtivo, Cotas, ValorCompra) AS I 
                    GROUP BY NomeAtivo, TPinvest
                    ORDER BY TPinvest, NomeAtivo;`;

    connection.query(query,  (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ "data": { result }, "meta": { message: "Dados inseridos com sucesso." } });
        }
    });
}
module.exports = { selectInvestimentoAgrupadoVAlorUni }