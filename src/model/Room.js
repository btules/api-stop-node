const { Model, Sequelize, DataTypes } = require('sequelize');

class Room extends Model {
  static init(sequelize){
    super.init({
      Id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
      CodeRoom: { type: DataTypes.STRING, allowNull: false },
      NumberPlayers: { type: DataTypes.INTEGER, allowNull: false  },
      PlayerNameCreator: { type: DataTypes.STRING, allowNull: false },
      NumberRounds: { type: DataTypes.INTEGER, allowNull: false }
    },{
      sequelize,
      modelName: 'Room',
      tableName: 'Room',
    })
  }
}

module.exports = Room;