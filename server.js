var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(PORT,function(){
    console.log('server listening on port :' + process.env.PORT || 3000);
})