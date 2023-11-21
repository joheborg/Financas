const mysql2 = require('mysql2')

const configDatabaseOptions = {
    host: "localhost",
    user: "root",
    password: "Jume1497!",
    database: "main"
}

const con = mysql2.createConnection(configDatabaseOptions);

module.exports = { connection: con }