const fs = require('fs')

const fileName = 'D:/Angular/univas/Programação VI/aula04/msg.txt'

try {
    fs.writeFileSync(fileName, 'Hello Word 3!!!', )
} catch(err) {
    console.error(`Failed to write data in file: ${err}`)
}