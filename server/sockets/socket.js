const { io } = require('../server');





io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido en a la aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconecado');
    });

    // escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        // enviamos a todos los usuarios
        client.broadcast.emit('enviarMensaje', data);

        /* if (mensaje.usuario) {
             callback({
                 resp: 'TODO SALIO BIEN!!'
             });
         } else {
             callback({
                 resp: 'TODO SALIO MAL!!!!!'
             });
         }*/


    });
});