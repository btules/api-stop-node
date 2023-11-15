const { Sequelize, DataTypes } = require('sequelize');
//const Sequelize = require('sequelize');
const db = require('../db.js');

const Room = db.define('room', {
    // Model attributes are defined here
    Id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    CodeRoom: { type: DataTypes.STRING, allowNull: false },
    NumberPlayers: { type: DataTypes.INTEGER, allowNull: false  },
    PlayerNameCreator: { type: DataTypes.STRING, allowNull: false }
  }, {
    // Other model options go here
    tableName: 'Room'
});

//Para criar a tabela no banco, caso não tenha
Room.sync();

//Verifica se tem alguma diferença na tabela, se tiver cria
//Room.sync({ alter: true });