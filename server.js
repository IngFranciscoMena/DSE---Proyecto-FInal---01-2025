const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo desde node.js utilizando express!');
});


app.listen(port, () => {
    console.log(`La aplicación esta escuchando en http://localhost:${port}`);
})