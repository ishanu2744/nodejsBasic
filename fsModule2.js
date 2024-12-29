const fs = require('fs')

const file= fs.readFileSync('file2.txt')
console.log(file.toString())

fs.readFile('file.txt',(err,data)=>{
    if(err){
        console.log('File not found')
    }else{
        console.log(data.toString())
    }
})
