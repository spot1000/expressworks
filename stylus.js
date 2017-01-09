var express = require('express');
var app = express();
var stylus = require('stylus');
var bodyparser = require('body-parser');
var path = process.argv[3];

app.use(express.static(process.argv[3]))
app.use(require('stylus').middleware(process.argv[3]));


app.listen(process.argv[2]);