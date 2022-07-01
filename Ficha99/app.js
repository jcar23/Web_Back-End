const { response } = require('express');
const { request } = require('express');
const express = require('express');
const { Sequelize, Model, DataTypes } = require("sequelize");
const app = express();
const port = 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});

const sequelize = new Sequelize('ficha9', 'root', '', {
    dialect: 'mysql'
})
sequelize.authenticate()
    .then(() => {
        console.log("connection has been established");
    })
    .catch(err => {
        console.log("Unable to connect", err);
    });

const Person = sequelize.define('persons', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    profession: DataTypes.STRING,
    age: DataTypes.INTEGER
})
sequelize.sync({ force: false })
    // promise
    .then(() => {
        console.log('Database & tables created!');
    }).then(function () {
        return Person.findAll();
    }).then(function (persons) {
        console.log(persons)
    })

// Person.bulkCreate([
//     { firstName: 'Carl', lastName:'Richard', profession:'Software Engineer', age: 20 },
//     { firstName: 'Chett', lastName:'Orland', profession: 'CyberSecurity Engineer', age: 21 },
//     { firstName: 'Shelt', lastName:'Normand', profession: 'Computer Engineer', age: 22 }
// ])

app.get('/persons', function(req,res) {
    Person.findAll()
    .then(resultado => {
        res.send(resultado)
    })
})

app.post('/persons',function(req,res){
    var novaPessoa = req.body;
    Person.create(novaPessoa)
    .then(resultado => {
        res.send('Nova Pessoa Adicionada: ' + resultado.id)
    })
})

app.delete('/persons', function(req,res){
    var id = req.body.id; // especifico no id
    if(isNaN(id)){
        res.send('Id Invalido')
    }
    else{
        Person.destroy({
            where: {
                id:id
            }
        })
        .then(resultado => {
            if(resultado !=0){
                res.send('Uma pessoa foi apagada: ' + id)
            }
            else{
                res.send('Pessoa não encontrada')
            }
        })
    }
})

app.delete('/persons/:id',function(req,res){
    var id = req.params.id;
    if (isNaN(id)) {
        res.send('Id invalido')
    }
    else{
        Person.destroy({
            where:{id:id}
        })
        .then(resultado => {
            if(resultado !=0){
                res.send('Uma pessoa foi apagada: ' + id)
            }
            else{
                res.send('Id da pessoa não encontrado ')
            }
        })
    }
})

app.get('/persons/:id',function(req,res){
    var id = req.query.id;
    if(isNaN(id)){
        res.send('Id invalido')
    }
    else{
        Person.findByPk(id)
        .then(resultado => {
            if(resultado == 0){
                res.send('Id not found')
            }
            else{
                res.send(resultado)
            }
        })
    }
})

app.get('/persons/:age/:profession', function(req,res){
    Person.findAll({
        where:{
            age:req.params.age,
            profession:req.params.profession
        }
    })
    .then(resultado=>{
        if(resultado == 0){
            res.send('Age and profession not found')
        }
        else{
            res.send(resultado)
        }
    })
})

app.put('/person/:id', function(req,res){
    Person.update(req.body,{
        where:{
            id:req.params.id
        }
    })
    .then(resultado => {
        if(resultado == 0){
            res.send('Cannot be updated')
        }
        else{
            Person.findAll({
                where:{
                    id:req.params.id
                }
            })
            .then(resultado=>{
                res.send(resultado)
            })

        }
    })
})
