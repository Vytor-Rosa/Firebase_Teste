const express = require('express');
const router = express.Router();

const usuarios = require('./api/usuarios/usuarios.controller');

router.use(express.json());
router.use("/", usuarios);

module.exports = router;