/**********************************************************
 * Objetivo: arquivo de APIs para o projeto Lion School
 * Versão: 1.0
 * Data: 24/03/2023
 * Autora: Yasmin Gonçalves
 **************************************************/

//Import das dependências do projeto
//Dependência para criar as requisições da API
const express = require('express')
//Dependência para gerenciar as permissões da API
const cors = require('cors')
//Dependência para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser')


const funcoes = require('./modulo/funcoes.js')


//Cria um objeto com as caracteristicas do express
const app = express()

app.use((request, response, next) => {

    //Define se a API será púlica ou privada
    response.header('Access-Control-Allow-Origin', '*')

    //Permite definir quais métodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Envia para o cors() as regras de permissões
    app.use(cors())

    next()
})




/*----------------------EndPoints-------------------------*/

//EndPoint para listar todos os cursos
app.get('/v1/lion-school/cursos', cors(), async function (request, response, next){
    let statusCode 
    let cursosOferecidos = {}

    //Função que lista todos os cursos
    let cursos = funcoes.getCursos()

    if(cursos){
        statusCode = 200
        cursosOferecidos = cursos
    } else {
        statusCode = 500
        cursosOferecidos.message = 'Não foi possível obter uma resposta'
    }

    response.status(statusCode)
    response.json(cursosOferecidos)

    next()
})

//EndPoint para listar todos os alunos
app.get('/v1/lion-school/alunos', cors(), async function (request, response, next){
    let statusCode
    let alunosMatriculados = {}

    //Função que lista todos os alunos
    let alunos = funcoes.getAlunos()

    if(alunos){
        statusCode = 200
        alunosMatriculados = alunos
    } else {
        statusCode = 500
        alunosMatriculados.message = 'Não foi possível obter uma resposta.'
    }


    response.json(alunosMatriculados)
    response.status(statusCode)

    next()
})

//EndPoint para listar os dados de um aluno com base no número de matrícula
app.get('/v1/lion-school/alunos/:matricula', cors(), async function (request, response, next){
    let statusCode
    let dadosAluno = {}

    let numeroMatricula = request.params.matricula

    if (numeroMatricula == '' || numeroMatricula == undefined ||  isNaN(numeroMatricula)) {
        statusCode = 400
        dadosAluno.message = 'Não foi possível processar pois os dados de entrada enviados não correspondem ao exigido.'
    } else {
        let dados = funcoes.getDadosAluno(numeroMatricula)

        if(dados){
            statusCode = 200
            dadosAluno = dados
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosAluno)

    next()
})

//EndPoint para listar alunos de determinado curso, filtrando pela sigla do curso *
app.get('/v1/lion-school/alunes', cors(), async function (request, response, next){
    let statusCode
    let alunosCurso = {}

    let nomeCurso = request.query.curso

    if (nomeCurso == '' || nomeCurso == undefined ||  !isNaN(nomeCurso)) {
        statusCode = 400
        alunosCurso.message = 'Não foi possível processar pois os dados de entrada enviados não correspondem ao exigido.'
    } else {
        let alunos = funcoes.getAlunosCurso(nomeCurso)

        if(alunos){
            statusCode = 200
            alunosCurso = alunos
        } else {
            statusCode = 404
        }

    }

    response.status(statusCode)
    response.json(alunosCurso)

   

})

//EndPoint para filtrar alunos pelo status (Finalizado/Cursando) *
app.get('/v1/lion-school/alunus', cors(), async function (request, response, next){
    let statusCode
    let alunos = {}

    let statusAluno = request.query.status

    if (statusAluno == '' || statusAluno == undefined ||  !isNaN(statusAluno)) {
        statusCode = 400
        alunos.message = 'Não foi possível processar pois os dados de entrada enviados não correspondem ao exigido.'
    } else {
        let alunosPorStatus = funcoes.getAlunosStatus(statusAluno)

        if(alunosPorStatus){
            statusCode = 200
            alunos = alunosPorStatus
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(alunos)
})


//Roda o serviço da API para ficar aguardando requisições
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080.')
})