const crud = require('../../crud');

async function salvarUsuario(req, res){
    const usuario = req.body;
    if(!usuario.email || !usuario.senha){
        res.status(404).send("pessoa inexistente")
    }else{
    return await crud.save("usuario", "", req.body);
    }
}

module.exports = {salvarUsuario}