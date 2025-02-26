import express from 'express'

const app = express ()


app.use(express.json())

//mock
const listas = [
    {id: 1, nome: 'Daniela'},
    {id: 2, nome: 'Bruno'},
]


function buscaPorId(id) {
    return listas.filter(listas => listas.id == id)
}

//rota raiz
app.get('/', (req,res) => {
    res.status(200).send('Aula de Prog Web - Pro Bruno Nascimento - SEI')
})

//novas rotas

app.get('/listas/', (req,res) => {
    res.status(200).send(listas)
})


app.get('/listas/:id', (req,res) => {
    res.json(buscaPorId(req.params.id))
})

app.get('/materias', (req,res) => {
    res.status(200).send(listas)
})

app.post('/listas', (req,res) => {
    listas.push(req.body)
    res.status(201).send('Aluno inserido')
})


//exposta app com rotas
export default app