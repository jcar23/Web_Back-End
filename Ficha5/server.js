const bodyParser = require('body-parser');
const { response } = require('express');
const express = require('express');

const fs = require('fs');
const app = express()
const port = 3000

function readFile(fileName,){
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended : false}));


app.get('/users', (request, response) => {

  response.send(fileStr)
})

/*app.post('/users', (req, res) => {
  var t = req.body.test;
  res.send(t);
})*/

app.post('/users', (request, response) => {
  var person = request.body;
  var size = Object.keys(fileObj).length;
  size++;
  // devolver um array com as chaves
  var str = 'person'; 
  var personId = str + size;
  person.id = size;
  fileObj[personId] = person; 
  //fileObj["person" + person.id] = person;
  response.send(JSON.stringify(fileObj));
});

app.delete('/users/:id', function(request, response){
  var id = request.params.id;
  var person = fileObj["person" + id];
  if (person != undefined){
    delete fileObj["person"+id]
    response.send("ID: " + id + "was deleted");
  }
  else{
    response.send("ID does not exist")
  }
  //response.send("This is a delete :" + id);
});
app.get('/users/:id', function(request, response){
  var id = request.params.id;
  var person = fileObj["person" + id];
  if (person != undefined){
    delete fileObj["person"+id]
    response.send(person);
  }
  else{
    response.send("ID does not exist")
  }
});

app.put('/users/:id'/*parameter chamdo id*/,function(request, response) {
var id = request.params.id;
var personFromBody = request.body;
var person = fileObj['person' + id]; // this comes from fileObject the doc with all the person
if (person =! undefined){
  personFromBody.id=id;
  fileObj['person'+ id] = personFromBody;
  response.send(fileObj);
}
else{
  response.send("ID does not exist")}
  
})

app.put('/users', (request, response) => {
  response.send("this is a put")
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
        console.log(`Example app listening on port ${port}`) 
})
      

var fileStr = readFile('./persons.json');
var fileObj = JSON.parse(fileStr);

/*  person.id = ++size;
  fileObj.person5 = person;
  res.send(JSON.stringify(fileObj));
*/
 

/*
  var id = request.params.id;
  var person = fileObj["person" + id];
  response.send(JSON.stringify(fileObj));*/ 