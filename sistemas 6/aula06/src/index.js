const express = require('express')

const app = express()
app.use(express.json())
const myDatabase = []



app.get('/', (req, res) => {
    res.send(myDatabase)
})

app.post('/', (req, res) => {
  myDatabase.push(req.body)
  res.send('Student created!')
})

app.get('/:xuxa', (req, res) => {
// req.params.xuxa
const person = myDatabase.find(i => i.cpf === req.params.xuxa)
res.send(person)
})

app.put('/:xuxa', (req, res) => {
  const personIndex = myDatabase.findIndex(i => i.cpf === req.params.xuxa)
  if(personIndex >= 0) {
    myDatabase[personIndex] = req.body
    res.send('Person Update!')
  }
})

app.delete('/:xuxa', (req, res) => {
  const personIndex = myDatabase.findIndex(i => i.cpf === req.params.xuxa)
  if(personIndex >= 0) {
    myDatabase.splice(personIndex, 1)
    res.send('Person Deleted!')
  }
})




const port = 8087
app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})