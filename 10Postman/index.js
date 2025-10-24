const express = require('express');

const mirrow = require('./endpoints/mirrow');

const app = express();
const port = 3000;

app.use(express.json());
app.get('/', mirrow);
app.post('/', mirrow);
app.put('/', mirrow);
app.patch('/', mirrow);
app.delete('/', mirrow);
app.head('/', mirrow);

app.listen(port, ()=> console.log("El servidor esta escuchando en el puesrto ${port}") )