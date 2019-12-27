const socket = io();

    var message = document.querySelector('#message');
    var username = document.querySelector('#userame');
    var btn = document.querySelector('#send');
    let output = document.querySelector('#output');
    let actions = document.querySelector('#actions');

    btn.addEventListener('click',function () {
        socket.emit('chat:message',{
            message:message.value,
            username: username.value
        })
        console.log(username.value, message.value)
    })


