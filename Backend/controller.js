// DECLARAÇÃO DE BIBLIOTECAS:
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const model=require('./models');
const bcrypt=require('bcrypt');

// =====================================================
// DEFINIÇÃO DE CRIPTOGRAFIA:
var salt = '$2b$10$oGNYbTMTWMhrxSxxiKWu8.';
// ==================================================================


// ================================
// DICIONÁRIO DE ERROS:

// 202 - Aceito;
// 204 - Aceito, contudo sem necessidade de reposta;
// 403 - Erro por quebra de servidor;
// 404 - Erro por não existência de dado;
// 412 - Pré-Requisitos de requisição ausente.

// ================================

// CONFIGURAÇÃO DAS BIBLIOTECAS:
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// ================================


// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================

//  ROTEAMENTO:

// ====================================================
// REGISTRAR CONTA DE USUÁRIO: (FORM)
app.post('/cad', async(req,res) => {
    try {
        let reqs = await model.Usuarios.create({
        'nome': req.body.nome,
        'matricula': req.body.matricula,
        'emailInstitucional': req.body.emailInstitucional,
        'senha': bcrypt.hashSync(req.body.senha, salt),
        'tipoUsuario': req.body.tipoUsuario,
        'createdAt': new Date(),
        'updatedAt': new Date(),
    });
    if (reqs){
        res.status(200).send(JSON.stringify('202'));
    }
    }
    catch {
        res.status(403).send(JSON.stringify('403'));
    }
    
});
// ====================================================

// ====================================================
// VERIFICAÇÃO DO CREDENCIAMENTO DO USUÁRIO: (LOGIN)
app.post('/log', async(req,res) => {
    try {
      let reqs = await model.Usuarios.findOne({
        where:{
            'matricula': req.body.matricula,
            'senha': bcrypt.hashSync(req.body.senha, salt),
        }
    });
    if(reqs === null){
        res.status(404).send(JSON.stringify('404'));
    }
    else{
        res.status(202).send(reqs);
    }  
    }
    catch {
        res.status(403).send(JSON.stringify('403'))
    }
});
// ====================================================

// ====================================================
// AUTO VERIFICAÇÃO DE CREDENCIAMENTO DO USUÁRIO: (LOGIN)
app.post('/Autolog', async(req,res) => {
    try {
      let reqs = await model.Usuarios.findOne({
        where:{
            'matricula': req.body.matricula,
            'senha': req.body.senha,
        }
    });
    if(reqs === null){
        res.status(404).send(JSON.stringify('404'));
    }
    else{
        res.status(202).send(reqs);
    }  
    }
    catch {
        res.status(204).send(JSON.stringify('204'))
    }
});
// ====================================================

// ====================================================
// CRIAÇÃO DE TURMA: (MAINPROF)
app.post('/turmac', async (req,res)=>{
    try {
        let reqs = await model.Professores.findOne({
            where: {
                matricula: req.body.professor,
            }
        });
        if(reqs === null){
            res.status(404).send(JSON.stringify('404'));
        }
        else{
            let reqs1 = await model.Turmas.create({
                'codigoTurma': req.body.codigoTurma,
                'curso': req.body.curso,
                'nomeTurma': req.body.nomeTurma,
                'idProfessor': reqs.idProfessor,
                'createdAt': new Date(),
                'updatedAt': new Date()
            });
            if (reqs1){
                res.status(202).send(reqs1);
            }
            else{
                res.status(403).send(JSON.stringify('403'));
            }
        }
    }
    catch {
        res.status(403).send(JSON.stringify('403'));
    }
});
// ====================================================

// ====================================================
// PESQUISA DE TURMAS: (MAINPROF)

app.get('/turmam', async (req,res) => {
    try{
        let reqs = await model.Professores.findOne({
            where: {
                matricula: req.body.professor,
            }
        });
        if(reqs === null){
            res.status(404).send(JSON.stringify('404'));
        }
        else{
            let reqs1 = await model.Turmas.findAll({
                where: {
                    idProfessor: reqs.matricula
                },
                raw: true,
            });
            console.log(reqs1)
        }
    }
    catch{

    }
})

// ====================================================

// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================

// ====================================================
// Inciciar o servidor fazendo a variável 'port' ouvir o localHost:
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});