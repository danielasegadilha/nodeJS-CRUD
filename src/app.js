import express from 'express'

const app = express ()

//rota raiz
app.get('/', (req,res) => {
    res.status(200).send('Aula de Prog Web - Pro Bruno Nascimento - SEI')
})

//novas rotas
app.get('/listas', (req,res) => {
    res.status(200).send('Listas de alunos')
})

app.get('/materias', (req,res) => {
    res.status(200).send('Materias do Semestre')
})


//exposta app com rotas
export default app