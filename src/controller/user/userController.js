const User = require('../../model/User');

class ConnectionRoomController{
    static async createOrUpdateConnection (userRoom, idConnection) {
        try{
            const { CodeRoom, Name } = userRoom;
            
            var dbUser = await User.findOne({ where: { Name, CodeRoom } });
            if(!dbUser) {
                dbUser = await User.create({ Name, CodeRoom,IdConnection: idConnection });
            }
            else {
                await User.update( { IdConnection: idConnection }, {  where: { Name, CodeRoom } });
            }
        }
        catch (error){
            console.log("Erro:", error);
        }
    }

    static async getUsersByRoom (codeRoom) {
        try{
            var listUsers = await User.findAll({ where: { CodeRoom: codeRoom } });
            console.log("Lista de usuários:", listUsers);
            return listUsers;
        }
        catch (error){
            console.log("Erro:", error);
        }
    }
}

module.exports = ConnectionRoomController;