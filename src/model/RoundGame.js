const { Model, Sequelize, DataTypes } = require('sequelize');

class RoundGame extends Model {
  static init(sequelize){
    super.init({
      Id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
      IdRoom: { type: DataTypes.INTEGER, allowNull: false },
      Letter: { type: DataTypes.CHAR, allowNull: false },
      Finished: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
      DateTimeInit: { type: DataTypes.DATE, allowNull: false},
      DateTimeEnd: { type: DataTypes.DATE, allowNull: true}
    },{
      sequelize,
      modelName: 'RoundGame',
      tableName: 'RoundGame',
    })
  }
}

module.exports = RoundGame;