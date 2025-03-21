const horaAtual = new Date().toLocaleTimeString();

function searchAlunoById(id){
    return lista.filter(lista => lista.id == id)
}

function deleteAlunoById(id) {
    lista = lista.filter(item => item.id != id);  // Remove o aluno com o id fornecido
}

//indicar para o express para ler e entender o body de uma requisição HTTP quando ele vier como json. Assim ele faz um serialize da requisição e transforma em um objeto JavaScript
app.use(express.json())

app.get('/lista', (req, res) => {
    const sql = "SELECT * FROM alunos;"
    conexao.query(sql, (error, result) => {
        if (error){
            console.log(error)
            res.status(404).json({'error' : error})
        } else {
            res.status(200).send(result)
        }
    })   
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

