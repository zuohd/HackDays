var fs=require('fs')
var querystring=require('querystring')
module.exports={
    readFile:function(file,res,req){
        fs.readFile(file,'utf-8',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            res.write(data)
            res.end()
        })
    },
    postReadFile:function(file,res,req,post){
        var urlObject=querystring.parse(post)
        var array=['email','password']
        var reg
        fs.readFile(file,'utf-8',function(err,data){
            if (err) throw err
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'}) 
            for(var i=0;i<array.length;i++){
                reg=new RegExp('{'+array[i]+'}','gi')
                data=data.replace(reg,urlObject[array[i]])
            }
            res.write(data)
            res.end()
        })

    },
    readImg:function(file,res){
        fs.readFile(file,'binary',(error,data)=>{
            if (error) throw error;
            res.writeHead(200,{'Content-Type':'image/jpeg'})
            res.write(data,'binary')
            res.end()
        })
    }
}