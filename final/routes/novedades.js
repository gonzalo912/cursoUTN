const { info } = require('console');
var express = require('express');
const app = require('../app');
const pool = require('../models/bd');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');
const ROW_SIZE = 2;

async function getUltimasSeisNovedades(){
    var query = "select * from novedades where id < 7;"
    var info = await pool.query(query);
    return info;
}

async function postUltimasSeisNovedades(){
    var rows = [];
    var ultimas = await getUltimasSeisNovedades();
    for(var i = 0; i < ultimas.length; i+=ROW_SIZE){
        rows.push(ultimas.slice(i, i+ROW_SIZE));
    }
    return rows;
}

async function buscarEnNovedades(search){
    var like = '%' + search + '%';
    var query = "select * from novedades where titulo like ? \
                or subtitulo like ? \
                or cuerpo like?";
    var resultados = await pool.query(query, [like, like, like]);
    var rows = [];
    for(var i = 0; i < resultados.length; i+=ROW_SIZE){
        rows.push(resultados.slice(i, i+ROW_SIZE));
    }
    return rows;

}

router.get('/', async function(req, res, next){
    var ult = await postUltimasSeisNovedades();
    res.render('novedades', {
        layout: 'layout',
        ult
    });
});

router.post('/', async function(req, res, next){
    try{
        if(req.body.busqueda != ""){
            busqueda = req.body.busqueda;
            var ult = await buscarEnNovedades(busqueda);
            console.log(ult);
            res.render('novedades',{
                layout: 'layout',
                busqueda,
                ult
            });
        }
    }catch (error){
        console.log(error);
        res.render('novedades', {
            layout: 'layout'
        });
    }
});






module.exports = router;