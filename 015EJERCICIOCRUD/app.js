const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

app.get("/", (req, res) => {
    const query = "SELECT * FROM equipos";

    db.query(query, (error, resultados) => {
        if (error) {
            console.log("Error al obtener los equipos: " + error);
            return res.status(500).send("Error al obtener los equipos");
        }
        res.render("index", { equipos: resultados });
    });
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/save", (req, res) => {
    const data = req.body;

    const query = "INSERT INTO equipos SET ?";

    db.query(query, data, (error) => {
        if (error) {
            console.log("Error al crear el equipo: " + error);
            return res.status(500).send("Error al crear el equipo");
        }
        res.redirect("/");
    });
});

app.get("/edit/:id", (req, res) => {
    const equipoid = req.params.id;
    const query = "SELECT * FROM equipos WHERE id = ?";

    db.query(query, [equipoid], (error, resultados) => {
        if (error) {
            console.log("Error al obtener el equipo: " + error);
            return res.status(500).send("Error al obtener el equipo");
        }
        res.render("edit", { equipo: resultados[0] });
    });
});

app.post("/update/:id", (req, res) => {
    const equipoid = req.params.id;
    const data = req.body;

    const query = "UPDATE equipos SET ? WHERE id = ?";

    db.query(query, [data, equipoid], (error) => {
        if (error) {
            console.log("Error al actualizar el equipo: " + error);
            return res.status(500).send("Error al actualizar el equipo");
        }
        res.redirect("/");
    });
});

app.get("/delete/:id", (req, res) => {
    const equipoid = req.params.id;
    const query = "DELETE FROM equipos WHERE id = ?";

    db.query(query, [equipoid], (error) => {
        if (error) {
            console.log("Error al eliminar el equipo: " + error);
            return res.status(500).send("Error al eliminar el equipo");
        }
        res.redirect("/");
    });
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));