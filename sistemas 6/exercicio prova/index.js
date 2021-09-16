const port = 8087
const express = require('express')
const router = require('./route/subject.route')

const app = express()
app.use(express.json())
app.use('/subjects', router)


app.get('/', (req, res) => {
    res.send('Subjects working!!!')
})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})