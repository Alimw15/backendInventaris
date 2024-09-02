import mysql from "mysql"

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_inventaris",
})

connection.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("connected to database")
})

export default connection;