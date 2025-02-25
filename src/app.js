import express from 'express'

const app = express ()

//rota raiz
app.get('/', (req,res) => {
    res.status(200).send('Aula de Prog Web - Pro Bruno Nascimento - SEI')
})

//novas rotas


//exposta app com rotas
export default app