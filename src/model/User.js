const { Model, Sequelize, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize){
    super.init({
      Id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
      Name: { type: DataTypes.STRING, allowNull: false },
      CodeRoom: { type: DataTypes.STRING, allowNull: false },
      IdConnection: { type: DataTypes.STRING, allowNull: true },
    },{
      sequelize,
      modelName: 'User',
      tableName: 'User',
    })
  }
}

module.exports = User;