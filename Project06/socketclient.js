var net = require('net')
var port = 9000
var host = 'localhost'

var client = new net.Socket()
client.setEncoding('utf-8')

client.connect(port, host, function () {
    client.write('hello')
})

client.on('data', function (data) {
    console.log('server message' + data)
    say()
})

client.on('error',function(err){
    console.log('error'+err)
})

client.on('close',function(){
    console.log('connection closed')
})

const readline = require('readline')
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function say() {
    r1.question('please input:', (inputStr) => {
        if (inputStr != 'bye') {
            client.write(inputStr + '\n')
        } else {
            client.destroy()
            r1.close()
        }
    })
}