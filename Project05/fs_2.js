const fs=require('fs')
fs.mkdir('logs',(error)=>{
    if(error){
        console.log(error)
    } else {
        console.log('logs directory created!')
    }
})