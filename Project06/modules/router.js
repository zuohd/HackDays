module.exports={
    home:function(req,res){
        res.write('home page')
    },
    login:function(req,res){
        res.write('login page')
    },
    register:function(req,res){
        res.write('register page')
    }
}