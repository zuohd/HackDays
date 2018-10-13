const fs=require('fs')
const zlib=require('zlib')
var fileReadStream=fs.createReadStream('data.json')
var fileWriteStream=fs.createWriteStream('data.json.gz')

fileWriteStream.on('pipe',(source)=>{
    console.log(source)
})

fileReadStream
.pipe(zlib.createGzip())
.pipe(fileWriteStream)
/* var count=0

 fileReadStream.once('data',(chunk)=>{
    console.log(chunk.toString())
}) 
fileReadStream.on('data',(chunk)=>{
    console.log(`${ ++count} receieved:${chunk.length}`)
    fileWriteStream.write(chunk)
})

fileReadStream.on('end',()=>{
    console.log('---ending---')
})

fileReadStream.on('error',(error)=>{
    console.log(error)
})*/