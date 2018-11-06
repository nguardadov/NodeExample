
var personaController={};

personaController.index = function (req, res, next)
{
    res.render("index");
}

personaController.form = function(req, res , next)
{
    res.render("usuarios/persona");
};

personaController.register = function(req, res, next)
{
   /* console.log(req.body.email); //algo@algo.com 123
    res.send("recibido");*/
    if(req.body.email === 'algo@algo.com' && req.body.password === '123' )
    {
        res.redirect('/perfil');
    }
    else
    {
        res.render("usuarios/persona"); 
    }
};

personaController.perfil = function(req, res, next)
{
    res.render('usuarios/perfil');
}

module.exports = personaController;