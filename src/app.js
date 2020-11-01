const express = require('express');
const app = express();
const cnn = require('./config/cnn');
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/persons',(req,res)=>{

    const sql = "select * from persona";
    cnn.query(sql,(error,result) => {
        if(error) throw error;
        if(result.length > 0){
            res.json(result);
        }else{
            res.send("Sin resultados");
        }

    });
});


app.post('/add_person',(req,res)=>{

    const person = {

        nombre : req.body.nombre,
        ape_pat : req.body.ape_pat,
        ape_mat : req.body.ape_mat 
    };
    const sql = "insert into persona set ?";
    cnn.query(sql,person,error => {
        if(error) throw error;
        res.send('Persona Creada');

    });
});
app.listen(3000);