const express = require('express')
const app = express()
app.use(express.json())
const customers = []

// Get Method
app.get('/customers', (req, res) => {
        res.send(customers)
    })
    //Post Method
app.post('/customers', (req, res) => {
        customers.push(req.body)
        res.send('Customer saved successfully!!')
    })
    //Get by ID Method
app.get('/:id', (req, res) => {
        const cust = customers.find(data => data.id === req.params.id)
            //res.send(`Customer with id ${id}: ${cust}`)
        res.send(cust)
    })
    //Put Method
app.put('/customers/:id', (req, res) => {
        const custIndex = customers.findIndex(ind => ind.id === req.params.id)
        if (custIndex >= 0) {
            customers[custIndex] = req.body
            res.send(`Customer with id: ${id} on index: ${custIndex} updated!!!`)
        }
    })
    //Delete Method
app.delete('/customers/:id', (req, res) => {
    const custIndex = customers.findIndex(ind => ind.id === req.params.id)
    if (custIndex >= 0) {
        customers.splice(custIndex, 1)
        res.send(`Customer with id: ${id} on index: ${custIndex} deleted!!!`)
    }
})


const port = 8087
app.listen(port, () => console.log(`Server started on port: ${port}`))