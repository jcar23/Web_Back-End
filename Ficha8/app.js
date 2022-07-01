// importar o express
//https://codesandbox.io/s/oqo0ylv8oy?file=/src/controllers/sample.controller.js

const { request, response, query } = require('express');
const express = require('express');
const mysql = require('mysql');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Ficha 7 API",
            description: "Ficha 7 API Information",
            contact: {
                name: "TPSI-DWB"
            },
            servers: ["http://localhost:3000"],
        },
        definitions: {
            "Person": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        
                        "x-primary-key": true
                    },
                    "firstname": {
                        "type": "string"                        
                    },
                    "lastname": {
                        "type": "string"                        
                    },
                    "profession": {
                        "type": "string"                        
                    },                 
                    "age": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
                "xml": {
                    "name": "Person"
                }
            }
        }
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// instanciar o express
const app = express();
// definir a porta do servidor http
const port = 3000;

// funções middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});

/**
 * @swagger
 * /person:
 *    get:
 *      tags:
 *        - Person
 *      summary: Gets a list of persons
 *      description: Returns a list of persons
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: An array of persons
 *              schema:
 *                $ref: '#/definitions/Person'
 */
 app.get('/person', function(request, response){
    connection.query('SELECT * FROM ficha7.person', function(error,rows,fields){
    response.send(rows)
    })
});

/**
 * @swagger
 * /person:
 *    post:
 *      tags:
 *        - Person
 *      summary: Creates and stores a person
 *      description: Returns the id of the created person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Model
 *            description: Sample person
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              description: Successfully created
 */
app.post('/person', (request, response) => {
    var personBody = request.body;
    connection.query('INSERT INTO ficha7.person (firstname, lastname, profession, age) VALUES (?, ?, ?, ?)', 
    [personBody.firstname, personBody.lastname, personBody.profession, personBody.age], function (err, results, fields) {
        response.send("Person added into ID: " + results.insertId);
    })
});

/**
 * @swagger
 * /person/:
 *    delete:
 *      tags:
 *        - Person
 *      summary: Deletes a person by id
 *      description: Deletes a single sperson by id
 *      produces:
 *          - application/json
 *      parameters:
 *       - name: id
 *         description: Person's id
 *         in: body
 *         required: true
 *         type: string
 *      responses:
 *          200:
 *              description: Successfully deleted
 */
app.delete('/person', (request, response) => {
    var id = request.params.id;
    connection.query('delete from person where id = ?',[id],function(error,rows,fields){
        //if (error) throw error
        response.send(delete "rows.affectedRows")
        })
});

/**
 * @swagger
 * /person/{id}:
 *    delete:
 *      tags:
 *        - Person
 *      summary: Deletes a person by id
 *      description: Deletes a single sperson by id
 *      produces:
 *          - application/json
 *      parameters:
 *       - name: id
 *         description: Person's id
 *         in: path
 *         required: true
 *         type: string
 *      responses:
 *          200:
 *              description: Successfully deleted
 */
app.delete('/person/:id', (request, response) => {
    var id = request.params.id;
    connection.query('delete from person where id = ?',[id],function(error,rows,fields){
        //if (error) throw error
        response.send(delete "rows.affectedRows")
        })
});


/**
 * @swagger
 * 9o/person/{id}:
 *    get:
 *      tags:
 *        - Person
 *      summary: Reads a single person by id
 *      description: Returns a single person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            description: Person's id
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: A single person
 *              schema:
 *                $ref: '#/definitions/Person'
 */
app.get('/person/:id', (request, response) => {

    var id = request.params.id;
    connection.query('select * from person where id =?', [id], function(error,rows,fields){
// array com parameter da query, 
    response.send(rows)})
});

/**
 * @swagger
 * /person/{age}/{profession}:
 *    get:
 *      tags:
 *        - Person
 *      summary: Reads a single person by age and profession
 *      description: Returns a single person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: age
 *            description: Person's age
 *            in: path
 *            required: true
 *            type: string
 *          - name: profession
 *            description: Person's profession
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: A single person
 *              schema:
 *                $ref: '#/definitions/Person'
 */
app.get('/person/:age/:profession', (request, response) => {
    var age = request.params.age;
    var profession = request.params.age.profession;
    connection.query('select * from person where age=? and profession=?', [age, profession],function(error,rows,fields){ 
    response.send(rows)})
});


/**
 * @swagger
 * /person{id}:
 *    put:
 *      tags:
 *        - Person
 *      summary: Updates and stores a person
 *      description: Returns the id of the updated person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Id
 *            description: Person's id
 *            in: path
 *            required: true
 *          - name: Model
 *            description: Sample person
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              description: Successfully created
 */
app.put('/person/:id', (request, response) => {
    var id = request.params.id;
    var details = request.body;
    connection.query('update person set ? where id = ?', [details, id], function(error,rows,fields){
        // if (error) throw error
         response.send("changed:" + rows.changedRows);
     })
});


// método que arranca o servidor http e fica à escuta
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});