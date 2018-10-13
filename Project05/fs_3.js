const fs=require('fs')
fs.writeFile('logs/hello.log','hello world ~ \n',(error)=>{
    if(error){
        console.log(error)
    } else {
        console.log('write file finished.')
    }
})

fs.appendFile('logs/hello.log','hello world2222 ~ \n',(error)=>{
    if(error){
        console.log(error)
    } else {
        console.log('write file finished.')
    }
})