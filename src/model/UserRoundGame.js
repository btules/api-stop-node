const { Model, Sequelize, DataTypes } = require('sequelize');
const AnswerCategory = require('./AnswerCategory');

class UserRoundGame extends Model {
  static init(sequelize){
    super.init({
      Id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
      IdRoundGame: { type: DataTypes.INTEGER, allowNull: false },
      IdUser: { type: DataTypes.INTEGER, allowNull: false  },
      IdAnswer: { type: DataTypes.INTEGER, allowNull: false  },
      LetterRound: { type: DataTypes.STRING, allowNull: true },
      DateTimeStop: { type: DataTypes.DATE, allowNull: true },
      Score: { type: DataTypes.INTEGER, allowNull: true }
    },{
      sequelize,
      modelName: 'UserRoundGame',
      tableName: 'UserRoundGame',
    })
  }
}

module.exports = UserRoundGame;