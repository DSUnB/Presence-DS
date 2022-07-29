// Declaração de bibliotecas:
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const model=require('./models');
const bcrypt=require('bcrypt');


let salt = bcrypt.genSaltSync(10)

// Configuração das bibliotecas:
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas:
// Registrar a Conta do usuário:
app.post('/cad', async(req,res) => {
    try {
        let reqs = await model.Usuarios.create({
        'matricula': req.body.matricula,
        'nome': req.body.nome,
        'emailInstitucional': req.body.emailInstitucional,
        'senha': bcrypt.hashSync(req.body.senha, salt),
        'tipoUsuario': req.body.tipoUsuario,
        'createdAt': new Date(),
        'updatedAt': new Date()
    });
    if (reqs){
        res.send(JSON.stringify('O usuário foi cadastrado com sucesso! Redirecionando...'));
    }
    }
    catch {
        res.send(JSON.stringify('error'));
    }
    
});

// Verificação de credenciamento do login:
app.post('/log', async(req,res) => {
    try {
      let reqs = await model.Usuarios.findOne({
        where:{
            'matricula': req.body.matricula,
            'senha': bcrypt.hashSync(req.body.senha, salt),
        }
    });
    if(reqs === null){
        res.send(JSON.stringify('error'));
    }
    else{
        res.send(reqs);
    }  
    }
    catch {
        res.send(JSON.stringify('error'))
    }
});

// Verificação de Autologin:
app.post('/Autolog', async(req,res) => {
    try {
      let reqs = await model.Usuarios.findOne({
        where:{
            'matricula': req.body.matricula,
            'senha': req.body.senha,
        }
    });
    if(reqs === null){
        res.send(JSON.stringify('error'));
    }
    else{
        res.send(reqs);
    }  
    }
    catch {
        res.send(JSON.stringify('error'))
    }
});

// Inciciar o servidor fazendo a variável 'port' ouvir o localHost:
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});