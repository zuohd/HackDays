const fs=require('fs')

fs.readdirSync('logs').map((file)=>{
    fs.unlink(`logs/${file}`,(error)=>{
        if(error){
            console.log(error)
        } else {
            console.log(`${file} is deleted.`)
        }
    })
})
fs.rmdir('logs',(error)=>{
    if(error){
        console.log(error)
    } else {
        console.log('remove directory finished.')
    }
})