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
app.post('/usuario/cadastrar', async(req,res) => {
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
app.post('/usuario/logar', async(req,res) => {
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
app.post('/usuario/autologar', async(req,res) => {
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
app.post('/professor/turma/criar', async (req,res)=>{
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
// PESQUISA DE TURMAS: (LOGIN - for professor)

app.post('/professor/turma/obter', async (req,res) => {
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
                    idProfessor: reqs.idProfessor
                },
                raw: true,
            });
           if (reqs1){
            res.status(202).send(reqs1);
           }
           else{
            res.status(204).send(JSON.stringify('204'));
           }
        }
    }
    catch {
        res.status(403).send(JSON.stringify('403'));
    }
})

// ====================================================

// ====================================================
// PESQUISA DE TURMAS: (LOGIN - for aluno)

app.post('/aluno/turma/obter', async (req,res) => {
    try{
        let reqs = await model.Alunos.findOne({
            where: {
                matricula: req.body.aluno,
            }
        });
        if(reqs === null){
            res.status(404).send(JSON.stringify('404'));
        }
        else{
            console.log('deu certo!')
        }
    }
    catch {
        res.status(403).send(JSON.stringify('403'));
    }
})

// ====================================================

// ====================================================
// ENTRAR TURMA: (MAINALUN)
app.post('/aluno/turma/entrar', async (req,res)=>{
    try {
        let reqs = await model.Alunos.findOne({
            where: {
                matricula: req.body.aluno,
            }
        });
        if(reqs === null){
            res.status(404).send(JSON.stringify('404'));
        }
        else{
            let reqs1 = await model.EntrarTurmas.create({
                'idAluno': reqs.idAluno,
                'codigoTurma': req.body.codigoTurma,
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