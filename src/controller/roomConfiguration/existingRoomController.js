const Room = require('../../model/Room.js');
const User = require('../../model/User.js');
const StartGameController = require('../../controller/game/startGameController.js');

class ExistingRoomController {
    static async getExistingRoom (req, res) {
        try{
            
            const { codeRoom } = req.params;

            const dbRoom = await Room.findOne({ where: { CodeRoom : codeRoom } }); //Esta validação não ta funcionando

            if(dbRoom){
                res.status(200).json({ dbRoom });
            }
            else{
                res.status(401).json({ error: "Sala não encontrada" });
            }
            
        }
        catch (error){
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    }

    static async setUserExistingRoom (req, res) {
        try{
            const { CodeRoom, Name } = req.body;

            const dbRoom = await Room.findOne({ where: { CodeRoom } });

            if(dbRoom){
                //Confere a quantidade de pessoas na sala
                var users = await User.findAll({ where: { CodeRoom} });
                if(users.length >= dbRoom.NumberPlayers && !users.some(user => user.Name === Name)){
                    res.status(401).json({ error: "Limite de jogadores atingido" });
                }
                else{
                    var dbUser = await User.findOne({ where: { Name } });
                    if(!dbUser)
                        dbUser = await User.create({ Name, CodeRoom });

                    var startGame = false;
                    //Se for o último player da sala, avisa que vai começar
                    if((users.length + 1) >= dbRoom.NumberPlayers){
                        //Ultimo usuário cria a o jogo/rodada
                        var roundGame = await StartGameController.createOrUpdateRound(dbRoom.CodeRoom);
                        startGame = true;
                    }

                    res.status(200).json({ room: dbRoom, user: dbUser, startGame: startGame });
                }
            }
            else{
                res.status(401).json({ error: "Sala não encontrada" });
            }
        }
        catch (error){
            console.log("Erro: ", error);
            res.status(500).json({ error: "Erro interno do servidor tttt" });
        }
    }
}

module.exports = ExistingRoomController;