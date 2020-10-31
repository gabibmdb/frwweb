const express = require('express');
const app = express();
const port = 3000;

app.get('/objeto', (req, res) => {

    const objeto = "Rota get"
    return res.json(objeto);
});

app.post('/objeto', (req, res) => {

    const objeto = "Rota post"
    return res.json(objeto);
});

app.put('/objeto', (req, res) => {
    
    const objeto = "Rota put"
    return res.json(objeto);
});

app.delete('/objeto', (req, res) => {

    const objeto = "Rota delete"
    return res.json(objeto);
});

app.listen(port,() => {
    console.log('Aplicação express porta ' + port)
});