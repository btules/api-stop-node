const Room = require('../../model/Room.js');
const User = require('../../model/User.js');
const StartGameController = require('../../controller/game/startGameController.js');
class NewRoomController {
    static async newRoom(newRoom){
        console.log(newRoom);
    }

    static async createRoom (req, res) {
        try{
            const {CodeRoom, NumberPlayers, PlayerNameCreator, NumberRounds} = req.body;
            const dbRoom = await Room.findOne({ where: { CodeRoom } });

            var dbUser = await User.findOne({ where: { Name: PlayerNameCreator } });
            if(!dbUser)
                dbUser = await User.create({ Name : PlayerNameCreator, CodeRoom });
            else{
                dbUser = await User.update( { CodeRoom }, {  where: { Id: dbUser.Id } });
                dbUser = await User.findOne({ where: { Name : PlayerNameCreator } });
            }

            if(dbRoom){
                res.status(200).json({ message: "Já existe esta sala" });
            }
            else{
                var room = await Room.create(req.body);
                await StartGameController.createRoundsGame(CodeRoom);

                res.status(200).json({ room , user: dbUser });
            }
        }
        catch (error){
            console.log("Erro:", error);
            res.status(500).json({ error: "NewRoomController > CreateRoom > Erro interno do servidor." });
        }
    }
}
module.exports = NewRoomController;