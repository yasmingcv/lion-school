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
    let alunosCurso = {}

    alunos.forEach(function (aluno){
        if(aluno.curso[0].sigla == curso){
            alunosCurso = aluno
        }

       
    })

    return alunosCurso

}


console.log(getAlunosCurso('rds'))


module.exports = {
    getCursos,
    getAlunos,
    getDadosAluno
}