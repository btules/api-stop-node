const Sequelize = require('sequelize');

//Classes utilizadas
const Room = require('./model/Room');
const AnswerCategory = require('./model/AnswerCategory');
const RoundGame = require('./model/RoundGame');
const User = require('./model/User');
const UserRoundGame = require('./model/UserRoundGame');

const dbConnect = new Sequelize("banco_stop", "root", "220c.", {
    host: 'mysqldb',
    dialect: 'mysql'
});
/*
await dbConnect.authenticate().then(function(){
    console.log("Sucesso na conexão com o banco de dados");
}).catch(function(){
    console.log("Erro conexão com banco de dados");
});*/

async function executeBD() {
    try {
        await dbConnect.authenticate();
        console.log("Sucesso na conexão com o banco de dados");
    } catch (error) {
        console.error("Erro na conexão com o banco de dados", error);
    }
}

executeBD();

Room.init(dbConnect);
Room.sync();

User.init(dbConnect);
User.sync();
User.sync({alter: true});

RoundGame.init(dbConnect);
RoundGame.sync();
RoundGame.sync({alter: true});

UserRoundGame.init(dbConnect);
UserRoundGame.sync();
UserRoundGame.sync({alter: true});

AnswerCategory.init(dbConnect);
AnswerCategory.sync();
AnswerCategory.sync({alter: true});

module.exports = dbConnect;