const express = require("express");
const router = express.Router();

const usuariosHandler = require("./usuarios.handler");

router.post("/usuarios", (req, res) => {   
    usuariosHandler.salvarUsuario(req, res).then(dados => res.json(dados));
})

module.exports = router;