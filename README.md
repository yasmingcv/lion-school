# Lion School (BackEnd)

APIs realizadas para um projeto de aprendizagem solicitado na aula de Programação Web BackEnd e Programação Web FrontEnd.

As APIs fornecem os dados necessários para o FrontEnd ser exeutado no projeto [Lion School (FrontEnd)](https://github.com/yasmingcv/lion-school-front).

---

## EndPoints:


Método | End-point | Descrição 
---|---|---
**GET** | https://lion-school-apis.cyclic.app//v1/lion-school/cursos |  Recupera uma lista de todos os cursos oferecidos pela escola.
**GET** | https://lion-school-apis.cyclic.app//v1/lion-school/alunos |  Recupera uma lista de todos os alunos matriculados na escola.
**GET** | https://lion-school-apis.cyclic.app//v1/lion-school/alunos/{matricula} | Recupera informações de um aluno específico com base no número de matrícula.
**GET** | https://lion-school-apis.cyclic.app//v1/lion-school/alunos?curso={ds}: | Recupera uma lista de todos os alunos matriculados no curso especificado.
**GET** | https://lion-school-apis.cyclic.app//v1/lion-school/alunos?status={finalizado} | Recupera uma lista de todos os alunos com o status especificado.

---

## Autores:

- [Yasmin Gonçalves](https://github.com/yasmingcv)
- [Cauã Felipe](https://github.com/alemao148)

### Professores
- [Fernando Leonid](https://github.com/fernandoleonid)
- [Marcel Teixeira](https://github.com/marcelnt)