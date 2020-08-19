// Instal mysql, express, body-parser

const mysql = require("mysql");
const express = require("express");
var app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
    host: 'danktown.ddns.net',
    port: 57031,
    user: 'root',
    password: 'password',
    database: 'acore_auth'
});

mysqlConnection.connect( (err) => {
    if (!err){
        console.log("DB connection succeded.");
    }
    else {
        console.log("DB connection failed." + JSON.stringify(err, undefined, 2));
    }
});

app.listen(3000, () => {
    console.log("Express server is running at port no: 3000");
});

// Get all users
/* request - response */
app.get("/users", (req, res) => {
    var q = "SELECT username from acore_auth.account;";
    mysqlConnection.query(q, (error, rows) => {
        if (!error) {
            // print in console
            console.log(rows);
            // this is the answer to request
            res.send(rows);
        }
        else {
            console.log(error);
        }
    })
});

// Get 1 user --- /users/1
// replace "?" from query with req.params.id (because we have :id)
app.get("/users/:id", (req, res) => {
    var q = "SELECT username from acore_auth.account where id = ?;";
    mysqlConnection.query(q, [req.params.id], (error, rows) => {
        if (!error) {
            // print in console
            console.log(rows);
            // this is the answer to request
            res.send(rows);
        }
        else {
            console.log(error);
        }
    })
});

// Create a post request
app.post("/users", (req, res) => {
    let emp = req.body;
    var q = "SELECT username from acore_auth.account where id = ?;";
    mysqlConnection.query(q, [emp.id], (error, rows) => {
        if (!error) {
            // print in console
            console.log(rows);
            // this is the answer to request
            res.send(rows);
        }
        else {
            console.log(error);
        }
    })
});