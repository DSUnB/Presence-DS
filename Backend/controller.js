// Declaração de bibliotecas:
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

// Configuração das bibliotecas:
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let usuario=models.Usuarios;

//Rotas:
app.get('/create', async(req,res) => {
    let create= await usuario.create({
        matricula: '21112312',
        nome: "Daniel",
        emailInstitucional: 'bomdiaecia@email.com',
        senha: '123123',
        tipoUsuario: 0,
        createdAt: new Date(),
        updateAt: new Date(),
    });
    res.send('Usuário criado com sucesso!');
});

// Inciciar o servidor fazendo a variável 'port' ouvir o localHost:
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});