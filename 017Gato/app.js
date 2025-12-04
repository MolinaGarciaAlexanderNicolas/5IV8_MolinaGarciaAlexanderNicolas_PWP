const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
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
    const query = "SELECT * FROM partidas ORDER BY id DESC";

    db.query(query, (error, resultados) => {
        if (error) {
            console.log("Error al obtener partidas: " + error);
            return res.status(500).send("Error al obtener partidas");
        }

        res.render("index", { partidas: resultados });
    });
});

app.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM partidas WHERE id = ?";

    db.query(query, [id], (error, resultados) => {
        if (error) {
            console.log("Error al obtener la partida: " + error);
            return res.status(500).send("Error al obtener la partida");
        }

        res.render("edit", { partida: resultados[0] });
    });
});

app.post("/create", (req, res) => {
    const nueva = {
        board: "_________",
        turn: "X",
        winner: null
    };

    const query = "INSERT INTO partidas SET ?";

    db.query(query, nueva, (error) => {
        if (error) {
            console.log("Error al crear la partida: " + error);
            return res.status(500).send("Error al crear la partida");
        }
        res.redirect("/");
    });
});

app.post("/update/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const query = "UPDATE partidas SET ? WHERE id = ?";

    db.query(query, [data, id], (error) => {
        if (error) {
            console.log("Error al actualizar la partida: " + error);
            return res.status(500).send("Error al actualizar la partida");
        }
        res.redirect("/");
    });
});

app.get("/delete/:id", (req, res) => {
    const id = req.params.id;
    const query = "DELETE FROM partidas WHERE id = ?";

    db.query(query, [id], (error) => {
        if (error) {
            console.log("Error al eliminar la partida: " + error);
            return res.status(500).send("Error al eliminar la partida");
        }
        res.redirect("/");
    });
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));