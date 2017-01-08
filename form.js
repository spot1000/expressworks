var express = require('express');
var path = require('path');
var bodyparser = require('body-parser')

var app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req,res) {
    var str = req.body.str.split('').reverse().join('');
    res.send(str);
});

app.listen(process.argv[2]);
