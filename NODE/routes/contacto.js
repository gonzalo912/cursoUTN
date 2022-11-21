var express = require('express');
var router = express.Router();

var nodemailer = require("nodemailer");

router.post('/', async (req, res, next) => {

    var mail = req.body.email;
    var comentarios = req.body.comentarios;
    var name = req.body.nombre;

    var obj = {
        to: 'olmosgonzalo@gmail.com',
        subject: name,
        html: 'EL MAIL : ' + mail + ' TE MANDO UN COMENTARIO. ACA MANDO EL COMENTARIO: ' + comentarios
    };

    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "389120d96f515e",
            pass: "c9d694d2b44084"
        },
    });

    var info = await transport.sendMail(obj);

    res.render('contacto', {
        message: 'Mensaje enviado.'
    });
});

module.exports = router;