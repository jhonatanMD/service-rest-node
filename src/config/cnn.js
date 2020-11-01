const mysql = require('mysql');

var cnn = mysql.createConnection({
    host:'localhost',
    database:'prueba',
    user:'root',
    password:'jhona_mysql'
});

cnn.connect((e) =>{
    if(e) throw e;
    console.log('conectado');
});

module.exports = cnn;