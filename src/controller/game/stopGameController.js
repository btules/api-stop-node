const UserRoundGame = require('../../model/UserRoundGame');
const RoundGame = require('../../model/RoundGame');
const AnswerCategory = require('../../model/AnswerCategory');
class StopGameController{
    static async stopGame(req, res){
        console.log(req.body);
        try{

            const { IdRoundGame, IdUser, Answers, DateTimeStop, Score } = req.body;
        
            //Busca a rodada que está ocorrendo
            var dbRoundGame = await RoundGame.findOne({ where: { Id: IdRoundGame }});

            //Armazenar o userRoundGame
            var dbUserRoundGame = await UserRoundGame.create({ IdRoundGame, IdUser, LetterRound: dbRoundGame.Letter, DateTimeStop, Score });
            //Armazenar answers
            if(Answers){
                Answers.forEach(async itemAnswer => {
                    await AnswerCategory.create({ IdRoundGame, IdUserRoundGame: dbUserRoundGame.Id, Category: itemAnswer.Category, Answer: itemAnswer.Answer });
                });
            }

            dbRoundGame.NumberRound++;
            res.status(200).json({ roundGame: dbRoundGame });
        }
        catch (error){
            console.log("Erro:", error);
            res.status(500).json({ error: "NewRoomController > CreateRoom > Erro interno do servidor." });
        }
    }
}

module.exports = StopGameController;