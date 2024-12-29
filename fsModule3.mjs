import fs from 'fs'

fs.writeFile('file3.txt','This 3rd file',(err)=>{
    if(err){
        console.log('Error')
    }else{
        console.log("File is created successfully")
    }
})

fs.readFile('file3.txt',(err,data)=>{
    if(err){
        console.log('File not found')
    }else{
        console.log(data.toString())
    }
})