const { Model, Sequelize, DataTypes } = require('sequelize');

class AnswerCategory extends Model {
  static init(sequelize){
    super.init({
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