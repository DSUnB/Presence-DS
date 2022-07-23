// Declaração de bibliotecas:
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

// Configuração das bibliotecas:
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


// Inciciar o servidor fazendo a variável 'port' ouvir o localHost:
let port=process.env.PORT || 19002;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});