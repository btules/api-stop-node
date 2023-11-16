const Room = require('../../model/Room.js');

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
}

module.exports = ExistingRoomController;