var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list',function(req,res){
  res.send('user list')
})

router.get('/ab*cd',function(req,res){
  res.send('regexpression')
})

router.get('/form',function(req,res){
  res.sendFile(__dirname+'/form.html')
})

router.post('/save',function(req,res){
  res.send('form submited')
})
/* Both handler for get and post */
router.all('/all',function(req,res){
  res.send('all')
})
module.exports = router;
