const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express(); 

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.listen(3000, () => {console.log("Rodando na porta 3000")});
