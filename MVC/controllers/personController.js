const person = require('../models/person');
const Person = require('../sequelize').Person;

// methods
exports.getAllPerson = function (request, response, next) {
    Person.findAll()
        .then(results => {
            response.send(results)
        }
    );
};

exports.findById = (req, res) => {
    var id = req.params.id;
    //parseInt
    if (isNaN(id)|| id == undefined) {
        res.status(400).send("Invalid id supplied");
    }
    else {
        Person.findByPk(id).then(person => {
            res.send(person)
        });
    }
};

exports.update = (req,res) => {
    Person.update(req.body, //for all request made on body
        {where:{ id:req.params.id}}
    )
    .then(result => {
        if (result == 0){
            res.status(404).send("This id cannot be found, then it cannot be updated");
        }
        else{
            res.send('Info Updated');
        }   
    });
}
exports.createNewPerson = (req,res) =>{
    var newPerson = req.body;
    Person.create(newPerson)
    .then(result =>{
        if(result!=0){
            res.status(200).send(result + "New Person Created")
        }
    })
}

// exports.getAllPerson = function (request,response, next){
//     Person.findAll()
//     .then(users=> {
//         response.render('person', {title: 'Persons', data:users});
//     })
// }