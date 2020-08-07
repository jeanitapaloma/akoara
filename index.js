var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var port = process.env.PORT ;

app.get('/',function(req,res){
    res.sendFile(__dirname + '/');
});
app.use('/Images', express.static(__dirname + '/Images'));

// app.listen(process.env.PORT || 3000, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);

app.listen(port, function(){
    console.log('listening on port '+port);
});