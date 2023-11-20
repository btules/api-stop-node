const { Model, Sequelize, DataTypes } = require('sequelize');

class RoundGame extends Model {
  static init(sequelize){
    super.init({
      Id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
      IdRoom: { type: DataTypes.INTEGER, allowNull: false },
      NumberRound: { type: DataTypes.INTEGER, allowNull: false },
      NumberOfRounds: { type: DataTypes.INTEGER, allowNull: false },
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

  static generateLetter(arrayLettersUsed){
    var alphabet = ['A','B','C','D','E','F','G','H','I','J','L','M','N','O','P','Q','R','S','T','U','V']; //k,w,x,y,z

    var lettersDisponible = alphabet.filter(letter => !arrayLettersUsed.includes(letter));

    if (lettersDisponible.length === 0) {
      // Lida com o caso em que não há mais letras disponíveis
      console.error('Todas as letras foram usadas!');
      return ""; // Ou outra lógica apropriada
    }

    // Escolhe uma letra aleatória do array filtrado
    var indexLetter = Math.floor(Math.random() * lettersDisponible.length);
    return lettersDisponible[indexLetter];
  }
}

module.exports = RoundGame;