// DECLARAÇÃO DE BIBLIOTECAS:
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const model=require('./models');
const bcrypt=require('bcrypt');
const { sequelize } = require('./models');

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
                'id': req.body.codigoTurma,
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
            let reqs1 = await model.EntrarTurmas.findAll({
                where: {
                    idAluno: reqs.idAluno
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
// CRIAR DADO EM ENTRAR TURMA: (MAINALUN)
app.post('/aluno/turma/entrar', async (req,res)=>{
    try {        

        let reqs = await model.Alunos.findOne({
            where: {
                matricula: req.body.aluno,
            } 
        }); 
        let reqs1 = await model.Turmas.findOne({
            where: {
                codigoTurma: req.body.codigoTurma,
            } 
        });
        if(reqs === null){
            res.status(404).send(JSON.stringify('404'));
        }
        else{
            let reqs2 = await model.EntrarTurmas.create({
                'idAluno': reqs.idAluno,
                'codigoTurma': req.body.codigoTurma,
                'curso': reqs1.curso,
                "nomeTurma": reqs1.nomeTurma,
                'createdAt': new Date(),
                'updatedAt': new Date()
            });
            if (reqs2){
                res.status(202).send(reqs2);
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
// CRIAR CHAMADA: (CRIARCHAMADA)
app.post('/professor/chamada/criar', async (req,res) =>{
    try {
        let reqs = await model.Chamadas.create({
            'id': req.body.codigoChamada,
            'codigoChamada': req.body.codigoChamada,
            'codigoTurma': req.body.codigoTurma,
            'situation': true,
            'createdAt': new Date(),
            'updatedAt': new Date()
        });
        if(reqs){
            res.status(202).send(reqs);
        }
    }
    catch{
        res.status(403).send(JSON.stringify('403'));
    }
})

// ====================================================

// ====================================================
// EXCLUIR TURMA: (CRIARCHAMADA)
app.delete('/professor/turma/excluir', async (req,res) =>{
    try {
        let reqs = await model.Turmas.destroy({
        where: {
            'codigoTurma': req.body.codigoTurma
        }
    });
    if(reqs){
        res.status(403).send(reqs);
    }
    }
    catch {
        res.status(403).send(JSON.stringify('403'));
    }
})

// ====================================================

// ====================================================
// EDITAR TURMA: (CRIARCHAMADA)
app.post('/professor/turma/atualizar', async (req,res) =>{
    try {
        let reqs = await model.Turmas.update({
            'curso': req.body.materia,
            'nomeTurma': req.body.turma,
            'updatedAt': new Date()
        },
        {
            where: {
                'codigoTurma': req.body.codigoTurma
            }
        });
    if(reqs){
        res.status(403).send(reqs);
    }
    }
    catch {
        res.status(403).send(JSON.stringify('403'));
    }
})
// ====================================================

app.post('/professor/chamada/situacao', async (req,res) =>{
    try {
        let reqs = await model.Chamadas.update({
            'situation': req.body.situation,
            'updatedAt': new Date()
        },
        {
            where: {
                'codigoChamada': req.body.codigoChamada
            }
        });
    if(reqs){
        res.status(403).send(reqs);
    }
    }
    catch {
        res.status(403).send(JSON.stringify('403'));
    }
})

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