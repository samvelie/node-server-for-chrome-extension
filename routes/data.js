var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'chrome-extension',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 1500
};

var pool = new pg.Pool(config);

router.get('/', function(req, res) {
  console.log('hit get');
  res.sendStatus(200);
});

router.post('/', function(req,res){
  console.log('hit post');
  res.sendStatus(200);
});


module.exports = router;
