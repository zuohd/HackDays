var file=require('./file')
module.exports={
    home:function(req,res){
        //res.write('home page')
        file.readFile('./views/home.html',res,req)
    },
    login:function(req,res){
        res.write('login page')
    },
    register:function(req,res){
        res.write('register page')
    },
    img:function(req,res){
        file.readImg('./images/pet.jpg',res)
    }
}