const fs=require('fs')

fs.stat('spider.js',(error,stats)=>{
    if(error){
        console.log(error)
    } else {
        console.log(stats)
        console.log(`file:${stats.isFile()}`)
        console.log(`directory:${stats.isDirectory()}`)
    }
})