import express from 'express' //antes da conversão para o módulo ES era: const express = require('express')

const app = express()
const dataAtual = new Date().toLocaleDateString();
const horaAtual = new Date().toLocaleTimeString();

//mock
let lista = [
    {id:1, nome: 'Bruno', grupo: 'P'},
    {id:2, nome: 'Dani', grupo: 'A'},
    {id:3, nome: 'Luis', grupo: 'A'},
    {id:4, nome: 'Bruno', grupo: 'A'},
]

function searchAlunoById(id){
    return lista.filter(lista => lista.id == id)
}

function deleteAlunoById(id) {
    lista = lista.filter(item => item.id != id);  // Remove o aluno com o id fornecido
}

//indicar para o express para ler e entender o body de uma requisição HTTP quando ele vier como json. Assim ele faz um serialize da requisição e transforma em um objeto JavaScript
app.use(express.json())

// Criando uma rota padrão ou raiz - isso está na documentação do express
app.get('/', (req, res) => {  //Aqui estamos criar um get através de uma arrow function. req representa request e res response. Você pode dar qualquer nome para essas variáveis
    res.status(200).send('SENAC - Aula 02')
})

app.get('/lista', (req, res) => {
    res.status(200).send(lista)
})

app.get('/lista/:id', (req, res) => {
    let index = req.params.id
    res.status(200).send(searchAlunoById(index)) //Se você não coloca um res, a requisição pode ser feita, mas ela fica aguardando a resposta até dar timeout
    //outra opções seriam 
    //res.status(200).send(searchAlunoById(req.params.id))
    //res.json(searchAlunoById(req.params.id))
})

app.post('/lista', (req, res) => {
    lista.push(req.body)
    res.status(201).send('Aluno cadastrado com sucesso')
})

app.delete('/lista/:id', (req, res) => {
    deleteAlunoById(req.params.id)
    res.status(201).send('Aluno deletado com sucesso')
})

app.get('/data', (req, res) => {
    res.send(dataAtual)
})

app.get('/horario', (req, res) => {
    res.send(horaAtual)
})

export default app
