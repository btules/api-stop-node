const express = require('express')
const router = express.Router();
const StartGameController = require('../controller/game/startGameController')
const StopGameController = require('../controller/game/stopGameController')
const ExistingRoomController = require('../controller/roomConfiguration/existingRoomController')
const NewRoomController = require('../controller/roomConfiguration/newRoomController')

//#region Room
router.post('/roomConfiguration/existingRoom', async (req, res) => {
    try{
        await ExistingRoomController.setUserExistingRoom(req, res);
    }
    catch (error){
        res.end();
    }
});

router.post('/roomConfiguration/newRoom', async (req, res) =>{
    try{
        await NewRoomController.createRoom(req, res);
    }
    catch (error){
        res.end();
    }
});
//#endregion Room

router.post('/game/startGame', (req, res) => {
    const playGame = StartGameController.startGame(req, res);
});
/*
router.get('/game/getRoundGame/:IdRoom', (req, res) => {
    StartGameController.getRoundGame(req, res);
});*/

router.post('/game/stopGame', (req, res) =>{
    const finalGame = StopGameController.stopGame(req, res);
});

router.post('/game/startGame/getRoundGame/:CodeRoom', (req, res) => {
    StartGameController.getRoundGame(req, res);
});


//Rota teste
router.get('/roomConfiguration/existingRoom/getByCode/:code', (req, res) => {
    const room = ExistingRoomController.getExistingRoom(req.params.code);
    res.status(200).json({ room });
});


router.get('/teste', (req, res) => {
    res.send('Esta é a mensagem que aparecerá na tela!');
})

module.exports = router;