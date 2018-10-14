var file=require('./file')
var url=require('url')
module.exports={
    home:function(req,res){
        //res.write('home page')
        file.readFile('./views/home.html',res,req)
    },

    login:function(req,res){
        //res.write('login page')
        let urlObject=url.parse(req.url,true).query
        console.log(urlObject.email)
        console.log(urlObject.password)
        file.readFile('./views/login.html',res,req) 
    },
    register:function(req,res){
        res.write('register page')
    },
    img:function(req,res){
        file.readImg('./images/pet.jpg',res)
    }
}