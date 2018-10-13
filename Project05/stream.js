const fs=require('fs')
var fileReadStream=fs.createReadStream('data.json')
var fileWriteStream=fs.createWriteStream('data_1.json')
var count=0

/* fileReadStream.once('data',(chunk)=>{
    console.log(chunk.toString())
}) */
fileReadStream.on('data',(chunk)=>{
    console.log(`${ ++count} receieved:${chunk.length}`)
    fileWriteStream.write(chunk)
})

fileReadStream.on('end',()=>{
    console.log('---ending---')
})

fileReadStream.on('error',(error)=>{
    console.log(error)
})