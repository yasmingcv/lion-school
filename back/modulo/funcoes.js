/**************************************************************
 * Objetivo: Arquivo de funções para o projeto Lion School
 * Versão: 1.0
 * Data: 24/03/2023
 * Autora: Yasmin Gonçalves
 *******************************************************/

//Import dos arquivos JSON
const cursos = require("./cursos.js")
const alunos = require('./alunos.js')

//Função que retorna todos os cursos existentes no JSON
const getCursos = function () {
let cursosOferecidos = []
let status = false

    cursos.forEach(function (curso) {
        cursosOferecidos.push(curso)
        status = true
    })

    if(status == false){
        return status
    } else {
        return cursosOferecidos
    }
}

//Função que retorna todos os alunos matriculados
const getAlunos = function () {
    let alunosMatriculados = []
    let status = false 

    alunos.forEach(function(aluno){
        alunosMatriculados.push(aluno)
        status = true
    })

    if(status == false){
        return status
    } else {
        return alunosMatriculados
    }
}




//Função que retorna dados de um aluno específico com base no número da matrícula
const getDadosAluno = function (matricula) {
    let numeroMatricula = matricula
    let status = false
    let dadosAluno = {}

    alunos.forEach(function (aluno){
        if(aluno.matricula == numeroMatricula){
            dadosAluno = aluno
            status = true
        }
    })

    if(status){
        return dadosAluno
    } else {
        return status
    }

}

//Função que retorna os alunos matrículados no curso especificado, filtrando pela sigla
const getAlunosCurso = function (siglaCurso){
    let curso = siglaCurso.toUpperCase()
    let status = false
    let alunosArray = []
    let alunosJson = {}

    alunosJson.alunos = alunosArray

    alunos.forEach(function (aluno){
        if(aluno.curso[0].sigla == curso){
            let alunoJson = {}

            alunoJson.nome = aluno.nome
            alunoJson.foto = aluno.foto
            alunoJson.curso = aluno.curso
            alunoJson.matricula = aluno.matricula
            alunoJson.sexo = aluno.sexo
            alunoJson.status = aluno.status

            alunosArray.push(alunoJson)

            status = true
        }
       
    })

    if(status){
        return alunosJson
    } else {
        return status
    }

}

//Função que retorna os alunos com status especificado (Cursando/Finalizado)
const getAlunosStatus = function (status) {
    let statusAluno = status.toUpperCase()
    let statusFun = false
    let alunosArray = []
    let alunosJson = {}

    alunosJson.alunos = alunosArray

    alunos.forEach(function (aluno){
        if(aluno.status.toUpperCase() == statusAluno){
            let alunoJson = {}

            alunoJson.nome = aluno.nome
            alunoJson.foto = aluno.foto
            alunoJson.curso = aluno.curso
            alunoJson.matricula = aluno.matricula
            alunoJson.sexo = aluno.sexo
            alunoJson.status = aluno.status

            alunosArray.push(alunoJson)

            statusFun = true
        }
    })

    if(statusFun){
        return alunosJson
    } else {
        return false
    }
}


// console.log(getAlunosStatus('Finalizado'))
// console.log(getAlunosCurso('ds'))

module.exports = {
    getCursos,
    getAlunos,
    getDadosAluno,
    getAlunosCurso,
    getAlunosStatus
}