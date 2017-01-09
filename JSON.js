var express = require('express');
var app = express();
var fs = require('fs');

app.set('json spaces', 0)

app.get('/books', function(req, res) {
    fs.readFile(process.argv[3], function(err, file) {
        if (err) {
            console.log(err);
        } else {
            var object = JSON.parse(file);
            res.send(object);
        }
        
    })
});

app.listen(process.argv[2]);