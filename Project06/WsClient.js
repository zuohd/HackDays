var ws = new WebSocket('ws://127.0.0.1:9000/')
ws.onopen = function () {
    ws.send('hello')
}

ws.onmessage = function (event) {
    var chatroom = document.querySelector('#chatroom')
    chatroom.innerHTML += '<br/>' + event.data
}

ws.onclose = function () {
    console.log('closed')
}

ws.onerror = function (err) {
    console.log('Error' + err)
}