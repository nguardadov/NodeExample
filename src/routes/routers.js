const express = require('express');
const router = express.Router();
const personaController = require('../controllers/PersonaController');

    //index
    router.get('/',personaController.index);
    //formulario
    //guardar formulario
    router.get('/form',personaController.form);
    router.post('/form',personaController.register);
    router.get('/perfil',personaController.perfil);

module.exports = router;