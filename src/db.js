const Sequelize = require('sequelize');

const dbConnect = new Sequelize("banco_stop", "root", "2204c.", {
    host: 'localhost',
    dialect: 'mysql'
});

dbConnect.authenticate().then(function(){
    console.log("Sucesso na conexão com o banco de dados");
}).catch(function(){
    console.log("Erro conexão com banco de dados");
});

module.exports = dbConnect;