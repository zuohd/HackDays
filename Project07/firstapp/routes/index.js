var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: '<b>Express</b>',
    isShow: true,
    content: '<b>ok</b>'
  });
});

module.exports = router;
