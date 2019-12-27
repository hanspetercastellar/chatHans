const express = require('express');
const path = require('path');
const app = express();
const socketIO = require('socket.io');
//setings
app.set('port', process.env.PORT || 3000 );
//http

app.use(express.static(path.join(__dirname,'public')));

//start server
const server = app.listen(app.get('port'), ()=>{
    console.log('Listening in port '+app.get('port'))
})

//WebSocket
const io = socketIO(server)
//Evento que se ejecuta cuando se conecta un cliente
io.on('connection',(socket)=>{
    console.log('new Connection',socket.id)
    socket.on('chat:message',(message)=>{
        console.log('El cliente con id: '+socket.id+' Esta Escribio: '+ message.message)
    })
})
