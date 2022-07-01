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

const sequelize = new Sequelize('exe', 'root', '', {
    dialect: 'mysql'
})
sequelize.authenticate()
    .then(() => {
        console.log("connection has been established");
    })
    .catch(err => {
        console.log("Unable to connect", err);
    });

    const curso = sequelize.define("curso", {
        // cursoId:{
        //     type:DataTypes.INTEGER,
        //     allowNull:false,
        //     primaryKey:true
        // },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        departamento: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      });
      
      // tabela salaries
      const diretor_curso = sequelize.define("diretor_curso", {
        // diretorCursoId:{
        //     type:DataTypes.INTEGER,
        //     allowNull:false,
        //     primaryKey:true
        // },
        nome_completo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        morada: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        habilitacao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data_nascimento: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
      });
      
      diretor_curso.hasOne(curso, {
        foreignKey: {
            type:DataTypes.INTEGER,
            allowNull:false,
            name: 'cursoId'
        }
      })
      curso.belongsTo(diretor_curso)
      
      const disciplina = sequelize.define("disciplina", {
        // disciplinaId:{
        //     type:DataTypes.INTEGER,
        //     allowNull:false,
        //     primaryKey:true
        // },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        data_nascimento: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        idioma: {
            type: Sequelize.STRING,
            allowNull: false,
        },
      });
      curso.hasMany(disciplina);
      
      
      const aluno = sequelize.define("aluno", {
        // alunoId:{
        //     type:DataTypes.INTEGER,
        //     allowNull:false,
        //     primaryKey:true
        // },
        nome_completo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data_nascimento: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        morada: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      
      });
      curso.hasMany(aluno);
sequelize.sync({ force: false })

// Person.bulkCreate([
//     { firstName: 'Carl', lastName:'Richard', profession:'Software Engineer', age: 20 },
//     { firstName: 'Chett', lastName:'Orland', profession: 'CyberSecurity Engineer', age: 21 },
//     { firstName: 'Shelt', lastName:'Normand', profession: 'Computer Engineer', age: 22 }
// ])

// curso.bulkCreate([
//     { cursoId: '1', nome: 'Carl', departamento:'Software Engineer'},
//     { cursoId: '2' ,nome: 'Carlc', departamento:'Software Engineer'},
//     { cursoId: '3',nome: 'Carlz', departamento:'Software Engineer'}
// ])
// diretor_curso.bulkCreate([
//     { diretorCursoId: '1' ,nome_completo: 'Carl', morada:'Soneer', habilitacao:'professor', data_nascimento:'2021-07-12'},
//     { diretorCursoId: '2',nome_completo: 'Carxsl', morada:'Soneersdf', habilitacao:'professordsd', data_nascimento:'2021-03-12'}
// ])

// disciplina.bulkCreate([
//     { disciplinaId: '1',nome: 'asasasa', idioma:'Sngineer'},
//     { disciplinaId: '2',nome: 'asasdsdsasa', idioma:'Snginexazsdaer'}
// ])

// aluno.bulkCreate([
//     { alunoId:'1' ,nome_completo: 'Carxsl', data_nascimento:'2021-03-12' ,morada:'Soneersdf'}
// ])

// app.get('/', function (request, response) {
//     response.send("ENDPOINT ROOT");
// });

// app.get('/persons', function (request, response) {
//     var id = request.query.id
//     //persons?id=1
//     if (id == undefined) {
//         Person.findAll().then(persons => {
//         response.send(persons)
//         })
//     }
//     else{
//         response.send("Not found")
//     }
// })

// app.post('/persons', function (req, res) {
//     // firstName: 'Dany', lastName:'Springs', profession: 'Mechanic Engineer', age: 22;
//     var newPerson = req.body;
//     Person.create(newPerson)
//         // console.log('A new person was added')
//         .then(newPerson => {
//             res.send(newPerson)
//         })
// })
// app.post('/persons', function(req,res){
//     var newPerson = {firstName: 'Dany', lastName:'Springs', profession: 'Mechanic Engineer', age: 22}
//     Person.create({newPerson})
//     .then(Danny => { 
//         console.log('A new person was added ',id)
//         res.send(newPerson)
//     })
// })

// app.delete('/persons', function (request, response) {
//     var id = request.body.id
//     if (isNaN(id)) {
//         response.status(400).send("Invalid id supplied");
//     }
//     else {
//         Person.destroy({
//             where: {
//                 id: id
//             }
//         }).then(result => {
//             if (result == 0) {
//                 response.status(404).send("Cannot find id")
//             }
//             else {
//                 response.send("Number of deleted instances: " + result)
//             }
//         })
//     }
// })

// app.delete('/persons/:id', function (req, res) {
//     var id = req.params.id;
 
//     if (isNaN(id)) {
//         res.status(400).send("Invalid id supplied");
//     }
//     else {
//         Person.destroy({where: {id:id}})
//             .then(result => {
//                 if(result == 0){
//                     res.status(404).send("Cannot find id");
//                 }
//                 else {
//                     res.send("Number of deleted instances: " + result);
//                 }
//             })
//     }
// });


// app.delete('/persons/:id', function(req,res){
//     var id = parseInt(req.params.id);
//     var target = {id};
//     Person.destroy({where: target})
//     .then(() => { 
//         res.send( "The Id: " + id + " Person was deleted sucessfully")
//     })
// })

// app.get('/persons/:id', function (req, res) {
//     var id = req.params.id;
//     //parseInt
//     if (isNaN(id)|| id == undefined) {
//         response.status(400).send("Invalid id supplied");
//     }
//     else {
//         Person.findByPk(id).then(person => {
//             res.send(person)
//         });
//     }

// });

// app.get('/persons/:profession/:age', function (req, res) {
//         Person.findAll({
//             where:{
//                 profession: req.params.profession,
//                 age: req.params.age
//             }
//         })
//         .then(result => {
//             if (result == 0){
//                 res.send("This id cannot be found");
//             }
//             else{
//                 res.send(result);
//             }   
//         });
// }
// );

// app.put('/persons/:id', function(req,res){  
//     Person.update(req.body, {
//         where: {
//             id:req.params.id
//         }
//     })
//     .then(result => {
//         if (result == 0){
//             res.send("This id cannot be found, then it cannot be updated");
//         }
//         else{
//             res.send('Info Updated');
//         }   
//     });
// })
// app.patch('/persons/:id',function(req,res){
//     var id = req.params.id;
//     Person.update({firstname:req.body}, {
//         where: {
//             id:id
//         }
//     })
//     .then(result => {
//         if (result == 0){
//             res.send("This id cannot be found, then it cannot be updated");
//         }
//         else{
//             res.send('Info Updated');
//         }   
//     });
// })