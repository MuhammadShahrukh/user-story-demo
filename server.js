var express = require('express');
var path = require('path');
var app = express();

app.use(express.static( path.join(__dirname , 'dist') ));

app.get('*', (req, res) => {
    console.log( __dirname );
    console.log( path.join(__dirname, 'dist/index.html') );
    
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 3000,function(){
    console.log('server listening on port :' + (process.env.PORT || 3000));
})