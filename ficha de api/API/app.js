const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teste'
});

connection.connect()

app.get('/', function(req, res) {
    res.send("Running");
});

app.get('/persons', function(req, res) {
    var sql = "SELECT * FROM person";

    connection.query(sql, function(error, results, fields) {
        if (error) {
            res.json(error);
        } else {
            res.json(results);
        }
    });

});

app.get('/person/:id', function(req, res) {

    var sql = "SELECT * FROM person WHERE id = " + req.params.id;

    console.log(req.body);

    connection.query(sql, function(error, results, fields) {
        if (error) {
            res.json(error);
        } else {
            res.json(results);
        }
    });
});

app.post('/person', function(req, res) {
    if (!req.body.first_name || !req.body.last_name || !req.body.image || !req.body.reviews || !req.body.description || !req.body.stars) {
        res.send("Missing Info!");
    }

    var sql = "INSERT INTO person SET first_name = ?, last_name = ?, image = ?, reviews = ?, description = ?, stars = ?";

    connection.query(sql, [req.body.first_name, req.body.last_name, req.body.image, req.body.reviews, req.body.description, req.body.stars], function(error, results, fields) {
        if (error) {
            res.json(error);
        } else {
            res.json(results.insertId);
        }
    })
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));