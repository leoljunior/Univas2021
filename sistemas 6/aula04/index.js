const fs = require('fs')

const folderName ='D:/Angular/univas/Programação VI/aula05'

if(fs.existsSync(folderName)) {
    console.log(`The folder "${folderName}" already exist!!`)
}else {
    console.log(`Creating the folder ${folderName}`)
    fs.mkdirSync(folderName)
    console.log('Folder created successfully!!!')
     
    // console.log(`Deleting the folder ${folderName}`)
    // fs.rmdirSync(folderName)
    // console.log('Folder deleted successfully!!!')


}

