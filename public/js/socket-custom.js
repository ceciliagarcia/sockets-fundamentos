var socket = io();

//escucchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
// emit enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Cecilia',
    mensaje: 'holis coca-cola'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);
});