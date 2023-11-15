const { Sequelize, DataTypes } = require('sequelize');
//const Sequelize = require('sequelize');
const db = require('../db.js');

const Sala = db.define('sala', {
    // Model attributes are defined here
    Id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    CodigoSala: { type: DataTypes.STRING, allowNull: false },
    NumeroJogadores: { type: DataTypes.INTEGER, allowNull: false  },
    NomeJogadorCriador: { type: DataTypes.STRING, allowNull: false }
  }, {
    // Other model options go here
    tableName: 'Sala'
});

//Para criar a tabela no banco, caso não tenha
Sala.sync();

//Verifica se tem alguma diferença na tabela, se tiver cria
//Sala.sync({ alter: true });