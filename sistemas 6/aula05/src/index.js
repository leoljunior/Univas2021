const port = 3003

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.get('/faculdade', (req, res) => {
    console.log('Univas')
})
app.get('/aluno', (req, res) => {
    console.log('Leonardo Jr')
})

app.use(express.static('/web'))



app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})