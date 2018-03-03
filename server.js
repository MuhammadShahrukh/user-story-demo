var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000,function(){
    console.log('server listening on port :' + process.env.PORT || 3000);
})