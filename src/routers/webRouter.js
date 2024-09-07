import express from "express"
import { getCharacters, setCurrentCharacter, loadGame } from "../controllers/characterController.js"

export const webRouter = express.Router()

webRouter.get('/', (req, res) => {
    res.render('startScreen', 
        {
            
        }
    )
})

webRouter.get('/selectcharacter', getCharacters)

webRouter.get('/selectedcharacter/:id', setCurrentCharacter)

webRouter.get('/game', loadGame)

