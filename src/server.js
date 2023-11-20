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

serverHttp.listen(3000, () =>{
    console.log('server ok')
});

//#region WEBSOCKET
//Mantive o socket aqui porque no outro arquivo tava dando tilt porque o socket não ficava pronto
const UserController = require('./controller/user/userController');

serverSocketIo.on('connection', socket => {
    console.log("Cheogu no webSocket:", socket.id);
    
    //Manda o client mandar o user pra salvar no banco
    socket.send('connectUser');
    
    socket.on('connectionUser', (user) => {
        //Salva o user no banco com o id da conexão
        UserController.createOrUpdateConnection(user, socket.id);
    });

    socket.on('message', (message) => {
        //Print mensagem que veio do client
        console.log(`Mensagem recebida: ${message}`);
        // Envie de volta a mensagem recebida para o cliente
        socket.send(`Você disse: ${message}`);
    });

    socket.on('disconnect', () => {
        console.log('desconectado: ' + socket.id);
    });
});
//#endregion WEBSOCKET