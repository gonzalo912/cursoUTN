var express = require('express');
var router = express.Router();
var novedadesModel = require('./../../models/novedadesModel');


router.get('/', async function(req, res, next) {
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades', {
        // layout: 'admin/layout'
        layout: 'layout',
        usuario: req.session.nombre,
        novedades
    });
    console.log(req.session.nombre);
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades');
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        // layout: 'admin/layout'
        layout: 'layout'
    });
});


router.post('/agregar', async (req, res, next) => {
    try{
        if((req.body.titulo != "") && (req.body.subtitulo != "") &&
        (req.body.cuerpo != "")){
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades');
        } else{
            console.log("entra al else");
            res.render('admin/agregar', {
                // layout: 'admin/layout'
                layout: 'layout',
                error: true, 
                message: 'Todos los campos son requeridos'
            });
        } 
    } catch (error){
        console.log(error);
        res.render('admin/agregar', {
            // layout: 'admin/layout'
            layout: 'layout',
            error: true, 
            message: 'No ha sido posible agregar la novedad'
        });
    }
});

router.get('/editar/:id', async (req, res, next) => {
    let id = req.params.id;
    let novedad = await novedadesModel.getNovedadById(id);
    res.render('admin/editar', {
        layout: 'layout',
        novedad
    });
});

router.post('/editar', async (req, res, next) => {
    try{
        let obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        };

        await novedadesModel.editNovedad(obj, req.body.id);
        res.redirect('/admin/novedades');

    } catch(error){
        console.log(error);
        res.render('admin/editar', {
            layout: 'layout',
            error: true,
            message: 'No ha sido posible editar la novedad seleccionada.'
        });
    }
});

module.exports = router;