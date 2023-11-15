const Sequelize = require('sequelize');

const Room = require('./model/Room');

const dbConnect = new Sequelize("banco_stop", "root", "2204c.", {
    host: 'localhost',
    dialect: 'mysql'
});

dbConnect.authenticate().then(function(){
    console.log("Sucesso na conexão com o banco de dados");
}).catch(function(){
    console.log("Erro conexão com banco de dados");
});

Room.init(dbConnect);
Room.sync();

module.exports = dbConnect;