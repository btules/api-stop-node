const Room = require('../../model/Room');
const RoundGame = require('../../model/RoundGame');
const User = require('../../model/User');
const UserRoundGame = require('../../model/UserRoundGame');
class StartGameController {
    static startGame(startGame){
        console.log(startGame)
    }
    
    static async createRoundsGame(codeRoom){
        try{
            var dbRoom = await Room.findOne({ where: { CodeRoom: codeRoom }});
            if(dbRoom){
                let arrayLettersUsed = [];
                for (let i = 1; i <= dbRoom.NumberRounds; i++) {
                    let letter = RoundGame.generateLetter(arrayLettersUsed);
                    try{
                        arrayLettersUsed.push(letter);
                        //Cria a rodada do jogo
                        await RoundGame.create({
                            IdRoom: dbRoom.Id,
                            NumberRound: i,
                            NumberOfRounds: dbRoom.NumberRounds,
                            Letter: letter,
                            Finished: false,
                            DateTimeInit: new Date()
                        });
                    } 
                    catch (createError) {
                        console.log("Erro ao criar a rodada:", createError);
                    }
                }
            }
        }
        catch(erro){
            console.log("Erro:", erro);
        }
    }

    static async getRoundGame(req, res){
        try{
            const { CodeRoom } = req.params;
            //Busca a sala
            var dbRoom = await Room.findOne({ where: { CodeRoom: CodeRoom }});
            //Busca o jogo que está acontecendo na sala
            var dbRound = await RoundGame.findOne({ where: { IdRoom: dbRoom.Id, Finished: false }});

            res.status(200).json({ roundGame: dbRound });
        }
        catch (error){
            console.log("Erro: ", error);
            res.status(500).json({ error: "Erro interno do servidor tttt" });
        }
    }
}
module.exports = StartGameController;
