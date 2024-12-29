import http from 'http';
import fs from 'fs';

const port = 5000;

const server= http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    if (req.url === '/') {
        res.statusCode=200
        res.end('<h1>This is Home</h1>')     
    }
    else if (req.url === '/about') {
        res.statusCode=200
        res.end('<h1>This is About</h1>')     
    }
    else if (req.url === '/home'){
        res.statusCode=200
        const data=fs.readFileSync('index.html')
        res.end(data.toString())
    }
    else{
        res.statusCode=404
        res.end('<h1>Page Not Found</h1>')
    }
})

server.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})