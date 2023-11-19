const { Model, Sequelize, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize){
    super.init({
      Id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
      Name: { type: DataTypes.STRING, allowNull: false },
      CodeRoom: { type: DataTypes.STRING, allowNull: false },
    },{
      sequelize,
      modelName: 'User',
      tableName: 'User',
    })
  }

  static async checkMaxLimitPlayers(codeRoom, room){
    var users = await User.findAll({ where: { CodeRoom: codeRoom } });
    if(users.length >= room.NumberPlayers)
      return true;
    else
      return false;
  }
}

module.exports = User;