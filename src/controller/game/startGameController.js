const Room = require('../../model/Room');
const RoundGame = require('../../model/RoundGame');
const User = require('../../model/User');
const UserRoundGame = require('../../model/UserRoundGame');
class StartGameController {
    static startGame(startGame){
        console.log(startGame)
    }

    static async createOrUpdateRound(codeRoom){
        try{
            //Busca a sala
            var dbRoom = await Room.findOne({ where: { CodeRoom: codeRoom }});
            
            if(!dbRoom){
                console.log("Sala não encontrada");
                return null;
            }

            //Busca o jogo que está acontecendo na sala
            var dbRound = await RoundGame.findOne({ where: { IdRoom: dbRoom.Id }});
            console.log("Aqui::", dbRound);
            if(dbRound && (dbRound.NumberOfRounds === dbRound.NumberRound) && !dbRound.Finished){
                await RoundGame.update( { Finished: true }, {  where: { Id: dbRound.Id } });
                return dbRound;
            }

            //Se o jogo não existir cria
            if(!dbRound){
                //Gera a letra da rodada do jogo
                var letter = RoundGame.generateLetter([]);
                //Cria a rodada do jogo
                dbRound = await RoundGame.create({
                    IdRoom: dbRoom.Id,
                    NumberRound: 1,
                    NumberOfRounds: dbRoom.NumberRounds,
                    Letter: letter,
                    Finished: false,
                    DateTimeInit: new Date()
                });
            }
            else{
                //Busca o criador da sala pra usar de base para as rodadas que já aconteceram
                var dbUserCreatorRoom = await User.findOne({ where: { Name: dbRoom.PlayerNameCreator, CodeRoom: dbRoom.CodeRoom } });
                //Busca as rodadas que aconteceram de acordo com o usuário criados e o id do jogo que está ocorrendo na sala
                var listUserRoundGame = await UserRoundGame.findAll({ where: { IdUser:dbUserCreatorRoom.Id, IdRoundGame: dbRound.Id }}); //Busca todas as rodas de acordo com o administrador da sala
                //Lista de letras usadas
                const arrayLettersUsed = listUserRoundGame.map(({ LetterRound }) => LetterRound);
                //Atribui a letra para o round do jogo
                dbRound.Letter = RoundGame.generateLetter(arrayLettersUsed);
                //Acrescenta round no jogo
                dbRound.NumberRound++;
                //Atualiza o round do jogo
                await RoundGame.update( { Letter: dbRound.Letter, NumberRound: dbRound.NumberRound }, {  where: { Id: dbRound.Id } });
            }
            return dbRound;
        }
        catch (error){
            console.log("Erro:", error);
            return null;
        }
    }

    static async getRoundGame(req, res){
        try{
            const { IdRoom } = req.params;
            //Busca a sala
            var dbRoom = await Room.findOne({ where: { Id: IdRoom }});
            //Busca o jogo que está acontecendo na sala
            var dbRound = await RoundGame.findOne({ where: { IdRoom: dbRoom.Id }});

            res.status(200).json({ roundGame: dbRound });
        }
        catch (error){
            console.log("Erro: ", error);
            res.status(500).json({ error: "Erro interno do servidor tttt" });
        }
    }
}
module.exports = StartGameController;
