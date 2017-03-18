var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var testData = require('./routes/data.js');



//for parsing requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', testData);


app.set('port', process.env.PORT || 5555);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
