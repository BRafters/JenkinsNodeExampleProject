const express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res){
    res.render("index");
});

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Listening on port ${port}`);
});