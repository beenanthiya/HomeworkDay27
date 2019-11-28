var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Facebee',
    test: 'xxx',
    myname: 'Bee',
    myfname: 'Nanthiya Chantharo',
    myage: '25'
  });
});

module.exports = router;