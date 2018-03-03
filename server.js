var express = require('express');
var path = require('path');
var app = express();

app.use(express.static( path.join('./dist') ));

app.get('*', (req, res) => {
 
    console.log(__dirname)
    res.sendFile( __dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 3000,function(){
    console.log('server listening on port :' + (process.env.PORT || 3000));
})