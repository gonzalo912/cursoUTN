var express = require('express');
var router = express.Router();

var nodemailer = require("nodemailer");

router.get('/', function(req, res, next){
    res.render('contacto');
})

router.post('/', async (req, res, next) => {

    var asunto = req.body.asunto;
    var mail = req.body.email;
    var comentarios = req.body.texto;
    var name = req.body.nombre;

    var obj = {
        to: 'olmosgonzalo@gmail.com',
        subject: asunto,
        html: name + " te ha enviado un mensaje:<br><br>"  + "  " +
        comentarios + "<br><br>Mail de contacto: " + mail
    };

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
    });

    var info = await transport.sendMail(obj);

    res.render('contacto', {
        message: 'Mensaje enviado.'
    });

});

module.exports = router;