const { Model, Sequelize, DataTypes } = require('sequelize');

class UserRoom extends Model {
  static init(sequelize){
    super.init({
      Id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
      IdUser: { type: DataTypes.INTEGER, allowNull: false },
      IdRoom: { type: DataTypes.INTEGER, allowNull: false  }
    },{
      sequelize,
      modelName: 'UserRoom',
      tableName: 'UserRoom',
    })
  }
}

module.exports = UserRoom;