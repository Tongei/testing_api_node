const mysql = require("mysql");

const db_connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_node_db",
    port : "3306"
});

module.exports = db_connection;