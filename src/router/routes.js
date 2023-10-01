const express = require('express')
const router = express.Router();
const StartGameController = require('../controller/game/startGameController')
const StopGameController = require('../controller/game/stopGameController')
const ExistingRoomController = require('../controller/roomConfiguration/existingRoomController')
const NewRoomController = require('../controller/roomConfiguration/newRoomController')

router.post('/roomConfiguration/existingRoom', (req, res) => {
    const room = req.body;
    const existingRoom = ExistingRoomController.existingRoom(room);
    res.send(existingRoom);
});

router.post('/roomConfiguration/newRoom', (req, res) =>{
    const newRoom = req.body;
    const createRoom = NewRoomController.newRoom(newRoom);
    res.send(createRoom);
});

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

module.exports = router;