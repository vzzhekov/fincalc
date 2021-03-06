/**
 * Created by vzhekov on 8/12/2014.
 */
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();



app.set('view engine', 'jade');
app.use("/styles", express.static('styles'));
app.use('/model', express.static('model'));
app.use('/img', express.static('img'));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/aboutme', function(req, res){
    res.render('aboutme');
});

var port = process.env.PORT || 8000;
http.createServer(app).listen( port, function() {
    console.log('Express server listening on port ' + port);
});