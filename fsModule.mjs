import fs from 'fs'
import http from 'http'

const server = http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write('File not found')
            return res.end()
        }else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        }
    })
})

server.listen(3030,()=>{
    console.log('Server is running at http://localhost:3030')
})