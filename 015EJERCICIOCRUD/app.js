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
    db.query("SELECT * FROM equipos", (err, results) => {
        if (err) throw err;
        res.render("index", { equipos: results });
    });
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/save", (req, res) => {
    const data = req.body;
    db.query("INSERT INTO equipos SET ?", data, (err) => {
        if (err) throw err;
        res.redirect("/");
    });
});

app.get("/edit/:id", (req, res) => {
    db.query("SELECT * FROM equipos WHERE id = ?", [req.params.id], (err, result) => {
        if (err) throw err;
        res.render("edit", { equipo: result[0] });
    });
});

app.post("/update/:id", (req, res) => {
    db.query("UPDATE equipos SET ? WHERE id = ?", [req.body, req.params.id], (err) => {
        if (err) throw err;
        res.redirect("/");
    });
});

app.get("/delete/:id", (req, res) => {
    db.query("DELETE FROM equipos WHERE id = ?", [req.params.id], (err) => {
        if (err) throw err;
        res.redirect("/");
    });
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));