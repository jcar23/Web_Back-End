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
    database: 'myvideos'
});
    
    //(A)
    //localhost:3000/videos --> postman
app.get('/videos',function(request, response){
    connection.query('SELECT * FROM myvideos.videos;', function(error,results,fields){
        if (results != undefined){
            response.send(results) 
        }
        else {
            response.send("Video list not found")
        }
    })
});
    //(B)
    //localhost:3000/videos --> postman
app.post('/videos',function(request, response){
    var newvideos = request.body;
    connection.query('insert videos set ?',[newvideos],function(err,rows,fields){
        if (rows != 0){
            response.send("A new videos was added \nId: " + rows.insertId)
        }
        else {
            response.send("Video was not ")
        }
        })
    });
    // {
    //     "uploader": "KFC",
    //     "titile": "Receita",
    //     "descript": "bem saboroso",
    //     "duration": "3:50",
    //     "url": "https://www.youtube.com/watch?v=3CVDrAkhDmI",
    //     "views": 3450,
    //     "likes": 210,
    //     "dislikes": 51,
    //     "comments": "Fast-food for all ",
    //     "tags": "Thisikfc"
    // }


    //(C)
    //localhost:3000/videos/uploader/Marshmello --> postman
app.get('/videos/uploader/:uploader', function(request,response){
        var uploader = request.params.uploader
        connection.query('SELECT * FROM myvideos.videos where uploader  = ?',[uploader], function(err,rows,fields){
            if (rows != 0){
                response.send(rows)
            }
            else {
                response.send("Uploader was not found ")
            }
        })

    });
    //(D)
    //localhost:3000/videos/2/likes --> postman
app.put('/videos/:id/likes',function (request,response) {
    var id = request.params.id;
    connection.query('UPDATE videos set likes=likes+1 where id  = ?', [id], function(err,rows,fields){
        connection.query("SELECT * FROM videos where id=?",[id],function(err,results,fields){
            if (results != undefined){
                response.send(results)
            }
            else {
                response.send(" something must be wrong ")
            }
        })
        })
    });
    //(E)
    //localhost:3000/videos/tags/:tags --> postman
app.get('/videos/tags/:tags', function(request,response){
        var tags = request.params.tags
        connection.query('SELECT * FROM myvideos.videos where tags = ?',[tags], function(err,rows,fields){
            if (rows != 0){
                response.send(rows)
            }
            else {
                response.send(" This tag was not found ")
            }
            })
    });

//////////////////////////////////////////////////       (B)       /////////////////////////////////////////////////////////
    
    //(A)
    //localhost:3000/videos/3 --> postman
    app.get('/videos/:id', function(request,response){
        var id = request.params.id
        connection.query('SELECT * FROM videos where id = ?',[id], function(err,rows,fields){
            if (rows != 0){
                response.send(rows)
            }
            else {
                response.send(" Video from this id doesnt exist ")
            }
            })
    });

    //(B)
    //localhost:3000/videos/1 --> postman
    app.delete('/videos/:id', function(request, response){
        var id = request.params.id;
        connection.query('delete from myvideos.videos where id = ?',[id], function(err,rows,fields){
            if (rows.affectedRows != 0){
                response.send("video was deleted: " + rows.affectedRows ) 
            }
            else {
                response.send("Id does not exist")
            }
            })
    });

    //(C)
    //localhost:3000/videos/uploader/Marshmello
    app.get('/videos/uploader/:uploader', function(request, response){
        var uploader = request.params.uploader
        connection.query('SELECT * FROM myvideos.videos where uploader  = ?',[uploader], function(err,rows,fields){
            if (rows.length != 0){
                response.send(rows) 
            }
            else {
                response.send("Uploader was not found")
            }
        })
    });

    //(D)
    //localhost:3000/videos/2/concat_comments
    app.put('/videos/:id/concat_comments',function (request,response) {
        var id = request.params.id;
        var additionalComment = request.body.comments;
        var originalComment;
        connection.query('select comments from videos where id = ? ',[id], function(error,results,fields){
            originalComment = results[0].comments;  
            connection.query(' UPDATE videos set comments = ? where id = ?',[originalComment + "; " + additionalComment, id], function(error,rows,fields){
                if (rows != 0){
                    response.send("A new comment was added: " + additionalComment);
                }
                else {
                    response.send("this task is wrong")
                }
                
            })
        })
    })
    //(E)
    //localhost:3000/videos/likesasc
    app.get('/videos/likesasc', function(request, response){
        connection.query('SELECT * FROM videos', function(err, rows, fields){
            rows.sort(function(a, b){return a.likes - b.likes})
            if (rows != 0){
                response.send(rows);
            }
            else {
                response.send("probably there is something wrong")
            }
        }) 
    });