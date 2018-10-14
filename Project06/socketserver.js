var net = require('net')
var chatServer = net.createServer(),
    clientMap = new Object()

var i = 0
chatServer.on('connection', function (client) {
    client.name = ++i
    console.log(`${client.name} is comming...`)
    
    clientMap[client.name] = client

    client.on('data', function (data) {
        console.log(`${client.name} message:${data}`)
        broadcast(data, client)
    })

    client.on('error', function (e) {
        console.log('client error' + e)
        client.end()
    })

    client.on('close', function (data) {
        delete clientMap[client.name]
        console.log(client.name + ' offline...')
        broadcast(client.name + 'offline...', client)
    })
})

function broadcast(message, client) {
    for (var key in clientMap) {
        clientMap[key].write(client.name + ' say:' + message + '\n')
    }
}

chatServer.listen('9000')