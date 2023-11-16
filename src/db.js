const Sequelize = require('sequelize');

//Classes utilizadas
const Room = require('./model/Room');
const User = require('./model/User');

const dbConnect = new Sequelize("banco_stop", "root", "2204c.", {
    host: 'localhost',
    dialect: 'mysql'
});

dbConnect.authenticate().then(function(){
    console.log("Sucesso na conexão com o banco de dados");
}).catch(function(){
    console.log("Erro conexão com banco de dados");
});

//Inicia classes
Room.init(dbConnect);
Room.sync();

User.init(dbConnect);
User.sync();

module.exports = dbConnect;