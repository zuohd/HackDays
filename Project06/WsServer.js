var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 9000})


var clientMap = new Object()
var i = 0
wss.on('connection', (ws) => {
    ws.name=++i
    console.log(`${ws.name} is comming..`)
    clientMap[ws.name] = ws
    ws.on('message', function(message){
        broadcast(message, ws)
    })
    ws.on('close',()=>{
        //global.gc
        console.log(`${ws.name} leaves..`)
    })
})

function broadcast(msg, ws){
    for (var key in clientMap) {
        clientMap[key].send(`${ws.name} says:${msg}`)
    }
}