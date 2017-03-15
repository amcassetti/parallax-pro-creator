var express = require('express');
var app = express();

app.set('views', __dirname + '/dist');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
  res.render('index.html');	
});

var server = app.listen(process.env.PORT || 8081, function(){
    var port = server.address().port;
    console.log('App listening on port '+port);
});

module.exports = app;