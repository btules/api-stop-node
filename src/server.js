const express =  require('express');
const routes  = require('./router/routes');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');

const server = express();

require('./db');

server.use(cors())
server.use(bodyParser.json())
server.use('/', routes)

//A partir do server que já existe, cria o socket
const serverHttp = http.createServer(server);
const serverSocketIo = require('socket.io')(serverHttp);

//Define onde vai ouvir
serverHttp.listen(3000, () =>{
    console.log('server ok')
});

//#region WEBSOCKET
//Mantive o socket aqui porque no outro arquivo tava dando tilt porque o socket não ficava pronto
const UserController = require('./controller/user/userController');

serverSocketIo.on('connection', socket => {
    //Manda o client mandar o user pra salvar no banco
    socket.send('connectUser');

    socket.on('connectionUser', (user) => {
        //Salva o user no banco com o id da conexão
        console.log("Conexão user:", user);
        UserController.createOrUpdateConnection(user, socket.id);
    });

    socket.on('message', async (messageWebSocket) => {
        //Print mensagem que veio do client
        const { CodeRoom, Message } = messageWebSocket;
        
        serverSocketIo.emit('message', messageWebSocket);

        // Envie de volta a mensagem recebida para o cliente
        socket.send(Message);
    });

    socket.on('disconnect', () => {
        console.log('desconectado: ' + socket.id);
    });
});

module.exports = { serverHttp, serverSocketIo };
//#endregion WEBSOCKET