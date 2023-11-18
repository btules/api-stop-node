const Sequelize = require('sequelize');

//Classes utilizadas
const Room = require('./model/Room');
const AnswerCategory = require('./model/AnswerCategory');
const RoundGame = require('./model/RoundGame');
const User = require('./model/User');
const UserRoundGame = require('./model/UserRoundGame');

const dbConnect = new Sequelize("banco_stop", "root", "2204c.", {
    host: 'localhost',
    dialect: 'mysql'
});

dbConnect.authenticate().then(function(){
    console.log("Sucesso na conexão com o banco de dados");
}).catch(function(){
    console.log("Erro conexão com banco de dados");
});

AnswerCategory.init(dbConnect);
AnswerCategory.sync();

Room.init(dbConnect);
Room.sync();

RoundGame.init(dbConnect);
RoundGame.sync();

User.init(dbConnect);
User.sync();

UserRoundGame.init(dbConnect);
UserRoundGame.sync();

module.exports = dbConnect;