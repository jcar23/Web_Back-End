
const PersonModel = require('./models/person')
const InvoiceModel = require('./models/invoice')
const { Sequelize, Model, DataTypes } = require("sequelize");


const sequelize = new Sequelize('ficha9', 'root', '', {
    dialect: 'mysql'

})

const Person = PersonModel(sequelize,Sequelize);

const Invoice = InvoiceModel(sequelize,Sequelize);



// sequelize.authenticate()
//     .then(() => {
//         console.log("connection has been established");
//     })
//     .catch(err => {
//         console.log("Unable to connect", err);
//     });

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

module.exports = {
    Person,
    Invoice
}