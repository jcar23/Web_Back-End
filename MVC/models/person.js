module.exports=(sequelize, type) => { //type é uma variavel qualquer
    return sequelize.define('persons',{
    firstName: type.TEXT,
    lastName: type.TEXT,
    profession: type.STRING,
    age: type.INTEGER
    })
};
