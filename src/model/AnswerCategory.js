const { Model, Sequelize, DataTypes } = require('sequelize');

class AnswerCategory extends Model {
  static init(sequelize){
    super.init({
      Id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
      IdRoundGame: { type: DataTypes.INTEGER, allowNull: false  },
      IdUserRoundGame: { type: DataTypes.INTEGER, allowNull: false  },
      Category: { type: DataTypes.STRING, allowNull: true },
      Answer: { type: DataTypes.STRING, allowNull: true }
    },{
      sequelize,
      modelName: 'AnswerCategory',
      tableName: 'AnswerCategory',
    })
  }
}

module.exports = AnswerCategory;