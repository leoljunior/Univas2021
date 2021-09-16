const port = 8087
const router = require('./router/subject.router')


const express = require('express')
const app = express()
app.use(express.json())
app.use('/subjects', router)

app.get('/', (req, res) => {
    res.send('Subjects working!!')
})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})