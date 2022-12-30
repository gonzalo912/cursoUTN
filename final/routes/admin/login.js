var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

router.get('/', function (req, res, next){
    res.render('admin/login', {
        layout: 'layout'
    });
});

router.post('/', async(req, res, next) => {
    try{
        console.log(req.body);
        req.session.sesion = false;
        var usuario = req.body.usuario;
        var password = req.body.password;
        var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);
        if (data != undefined){
            req.session.id_usuario = data.id;
            req.session.nombre = data.user;
            req.session.sesion = true;
            res.redirect('/admin/novedades');
            console.log(req.session.nombre + '   ' + req.session.id_usuario);
        } else{
            res.render('admin/login', {
                layout: 'layout',
                error: true
            });
        }
    } catch (error){
        console.log(error);
    }
})


router.get('/logout', function (req, res, next) {
    req.session.destroy();
    req.session.sesion = false;
    res.render('admin/login', {
        layout: 'layout',
 
    });
});

module.exports = router;