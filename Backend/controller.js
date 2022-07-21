const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

let usuarios=models.Usuarios;
let alunos=models.Alunos;
let professores=models.Professores;
let chamadas=models.Chamadas;
let turmas=models.Turmas;
let iniciarTurma=models.IniciarTurma;
let efetuarChamada=models.EfetuarChamada;
let entrarTurma=models.EntrarTurma;
let realizarChamada=models.RealizarChamada;
let responderChamada=models.ResponderChamada;

app.get('/create',async (req,res)=>{
    let create=await usuarios.create({
        matricula: "211061331",
        nome: "Alana Gabriele",
        emailInstitucional: "211061331@aluno.unb.br",
        tipoUsuario: new Boolean(),
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Usuário criado com sucesso!');
});

app.get('/read', async (req,res)=>{
    let read=await user.findAll({
        raw:true,
    });
    console.log(read);
});

app.get('/update', async (req,res)=> {
    let update=await user.findByPk(2,
        {include:[{all:true}]}
        ).then((response)=>{
            response.Trackings[0].local='Nova Cidade';
            response.Trackings[0].save();
    });
});

app.get('/delete', async (req,res)=> {
    user.destroy({
        where: {id:2}
    });
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});