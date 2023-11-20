const User = require('../../model/User');

class ConnectionRoomController{
    static async createOrUpdateConnection (userRoom, idConnection) {
        console.log("Chegou na controller de usuário");
        console.log("Id: ", idConnection);

        try{
            const { CodeRoom, Name } = userRoom;
            
            var dbUser = await User.findOne({ where: { Name, CodeRoom } });
            if(!dbUser) {
                dbUser = await User.create({ Name, CodeRoom,IdConnection: idConnection });
            }
            else {

                await User.update( { IdConnection: idConnection }, {  where: { Name, CodeRoom } });
            }
            console.log("Depois que salvou: ", dbUser);
        }
        catch (error){
            console.log("Erro:", error);
        }
    }
}

module.exports = ConnectionRoomController;