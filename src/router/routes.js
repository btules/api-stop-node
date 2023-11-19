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
    const startGame = req.body;

    const playGame = StartGameController.startGame(startGame);

    res.send(playGame);
});

router.post('/game/stopGame', (req, res) =>{
    const stopGame = req.body;

    const finalGame = StopGameController.stopGame(stopGame);

    res.send(finalGame);
});

router.get('/roomConfiguration/existingRoom/getByCode/:code', (req, res) => {
    const room = ExistingRoomController.getExistingRoom(req.params.code);
    res.status(200).json({ room });
});

module.exports = router;