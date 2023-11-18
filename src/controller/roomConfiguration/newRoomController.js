const Room = require('../../model/Room.js');
const User = require('../../model/User.js');

class NewRoomController {
    static async newRoom(newRoom){
        console.log(newRoom);
    }

    static async createRoom (req, res) {
        try{
            const {CodeRoom, NumberPlayers, PlayerNameCreator, NumberRounds} = req.body;
            const dbRoom = await Room.findOne({ where: { CodeRoom } });

            const dbUser = await User.findOne({ where: { Name: PlayerNameCreator } });
            if(!dbUser)
                await User.create({ Name : PlayerNameCreator });
            
            if(dbRoom){
                res.status(200).json({ message: "Já existe esta sala" });
            }
            else{
                const room = await Room.create(req.body);
                res.status(200).json({ room });
            }
        }
        catch (error){
            console.log("Erro:", error);
            res.status(500).json({ error: "Erro interno do servidor." });
        }
    }
}
module.exports = NewRoomController;