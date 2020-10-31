const express = require('express');
const app = express();
const port = 3000;

app.get('/aula', (req,res) => {
    res.send("Primeiro Endpoint, aula 01")
});

app.get('/spi', (req, res) => {
    res.send("Aula SPI, aula 01 - service 2")
});

app.listen(port, () => {
    console.log('Aplicação com express porta ' + port);
});