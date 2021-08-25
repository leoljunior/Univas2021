const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hi everyone!!')
})

const port = 8087

server.listen(port, () => {
    console.log(`Server started on port ${port}`)
})