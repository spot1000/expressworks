var express = require('express');
var app = express();
var path = require('path');
var crypto = require('crypto');

app.put('/message/:id', function(req, res) {
    var id = req.params.id;
    var str = crypto.createHash('sha1').update(new Date().toDateString().toString() + id).digest('hex');
    res.send(str);
});

app.listen(process.argv[2]);