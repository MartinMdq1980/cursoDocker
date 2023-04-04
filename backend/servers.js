const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

require("dotenv").config(); // carga el .env

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = mysql.createConnection({
    host: process.env.DB_HOST, //'localhost',
    user: process.env.DB_USER,    //'userDocker',
    password: process.env.DB_PASSWORD,    //'Leonel2008',
    database: process.env.DB_NAME,       //'cursodockerapp'
    port: process.env.DB_PORT
});

db.connect(err => {
    if (err) {
        console.error('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conexión exitosa con ID ' + db.threadId);
});

app.use(bodyParser.json());
app.use(cors());

app.get('/usuarios/', (req, res) => {
   
    
    db.query('SELECT * FROM usuarios', (err, result) => {
        if (err) throw err;
        res.send(result);
    });
 
});
app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
  
        db.query('SELECT * FROM usuarios where id = ?', [id], (err, result) => {
         if (err) throw err;
            res.send(result);
        });

});

app.post('/usuarios', (req, res) => {
    const { nombre, email, contraseña } = req.body;
    db.query('INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)', [nombre, email, contraseña], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, email, contraseña } = req.body;
    db.query('UPDATE usuarios SET nombre = ?, email = ?, contraseña = ? WHERE id = ?', [nombre, email, contraseña, id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, result) => {
       if (err) throw err;
        res.send(result);
    });
});

/*app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});*/