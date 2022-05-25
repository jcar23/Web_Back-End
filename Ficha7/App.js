const bodyParser = require('body-parser');
const { response } = require('express');
const express = require('express');
const app = express()
const mysql = require('mysql')
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended : false}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) 
})
// SQl connection 
var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'ficha7'
});
app.get('/persons', function(request, response){
    connection.query('SELECT * FROM ficha7.persons', function(error,rows,fields){
    response.send(rows)
    })
    
});

app.post('/persons', function (request, response) {
    var personBody = request.body;
    connection.query('INSERT INTO ficha7.persons (firstname, lastname, profession, age) VALUES (?, ?, ?, ?)', 
    [personBody.firstname, personBody.lastname, personBody.profession, personBody.age], function (err, results, fields) {
        response.send("Person added into ID: " + results.insertId);
    })
})
app.delete('/persons',function(request, response){
    var sql = "'delete from persons where id = ?'"
    var id = request.params.id;
    connection.query('delete from persons where id = ?',[id],function(error,rows,fields){
        //if (error) throw error
        response.send(delete "rows.affectedRows")
        })
});
app.get('/persons/:id',function(request, response){
    var id = request.params.id;
    connection.query('select * from persons where id =?', [id], function(error,rows,fields){
// array com parameter da query, 
    response.send(rows)})
})
;
app.get('/persons/:age/:profession',function(request, response){
    var age = request.params.age;
    var profession = request.params.age.profession;
    connection.query('select * from persons where age=? and profession=?', [age, profession],function(error,rows,fields){ 
    response.send(rows)})
})
app.put('/persons/:id', function(request, response){
    var id = request.params.id;
    var details = request.body;
    connection.query('update persons set ? where id = ?', [details, id], function(error,rows,fields){
        // if (error) throw error
         response.send("changed:" + rows.changedRows);
     })
})

