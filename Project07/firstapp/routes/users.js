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

module.exports = router;
