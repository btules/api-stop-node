const { Model, Sequelize, DataTypes } = require('sequelize');

class UserRoom extends Model {
  static init(sequelize){
    super.init({
      Id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
      Name: { type: DataTypes.STRING, allowNull: false },
      CodeRoom: { type: DataTypes.STRING, allowNull: false  }
    },{
      sequelize,
      modelName: 'UserRoom',
      tableName: 'UserRoom',
    })
  }
}

module.exports = UserRoom;