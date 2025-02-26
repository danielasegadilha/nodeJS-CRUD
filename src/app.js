import express from 'express'

const app = express ()


app.use(express.json())

//mock
const list = [
    {id: 1, nome: 'Daniela'},
    {id: 2, nome: 'Bruno'},
]


function getStudentById(id) {
    return list.filter(list => list.id == id)
}


function deleteStudentById(id) {
    return list.filter(list => list.id == id)
}


//rota raiz
app.get('/', (req,res) => {
    res.status(200).send('Aula de Prog Web - Pro Bruno Nascimento - SEI')
})

//novas rotas

app.get('/list/', (req,res) => {
    res.status(200).send(list)
})


app.get('/list/:id', (req,res) => {
    res.json(getStudentById(req.params.id))
})


app.post('/list', (req,res) => {
    list.push(req.body)
    res.status(201).send('Aluno inserido')
})

app.delete('/list/:id', (req,res) => {
    res.json(deleteStudentById(req.params.id))
})


//exposta app com rotas
export default app