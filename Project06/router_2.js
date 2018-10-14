const http=require('http')
var url=require('url')
var router=require('./modules/router')
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html;charset=utf-8'})
    if(req.url!=='/favicon.ico'){
        var pathName=url.parse(req.url).pathname.replace(/\//,'');
        console.log(pathName)
        try{
            router[pathName](req,res)
        } catch(error){
            console.log(error)
            router['home'](req,res)
        }
        
    }
    //res.end()
}).listen(8000)
console.log('Server running at http://localhost:8000')