const { response } = require('express');
const express = require('express');
const { get } = require('express/lib/response');
const fs = require('fs');
const { request } = require('http');
const { connect } = require('http2');
const app = express()
const port = 3000

fs.open('log.txt','a', function(err, fd){
    console.log("File was created " + fd);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) 
})

app.get('/',(request, response)=>{
    const body = 'hello world';
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain'
    });
    response.end(body)
    log(request,response);
})

app.get('/htmlres',(request, response)=>{
    const body = " <!DOCTYPE html> <html> <head> <title>Title of the document</title> </head> <body> The content of the document......</body> </html>";
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': "text/html"
    });
    response.end(body)
    log(request,response);
});

app.get('/htmlfile',(request, response)=>{
    var date = new Date();
    var body = fs.readFileSync('./index.html','utf-8');
    body = body.replace('{Message}', date.toDateString());
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': "text/html"
    });
    response.end(body)
    log(request,response);
});

app.get("/user/:name", (response,request)=>{
    var name = request.params.name;
    var date = new Date();
    name = name.replace('{Message}', date.toDateString());
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(name),
        'Content-Type': "text/html"
    });
    response.send(name);
    log(request,response);
})

function log (request,response){
    var method = request.method;
    var path = request.route.path;
    var date = new Date();
    var str = "\n path:" + path +  "\n METHOD:" + method + "\n date:" + date;
    fs.appendFileSync("./log.txt", str)
}

app.get('/readFile',(request, response)=>{
    var body = fs.readFileSync('./log.txt','utf-8');
    body = body.replace('{Message}');
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': "text/html"
    });
    response.end(body)
    log(request,response);
});

app.get("/downloadFile", function(req,res){
  
    var body = fs.readFileSync('./log.txt','utf-8');
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': "text/html"
    });
    res.download("log.txt");
    log(req,res)
})

app.delete("/deleteFile", function(req,res){
    var file = delete ('./log.txt','utf-8');
    res.send("File was deleted " + file)
    log(req,res)
})
