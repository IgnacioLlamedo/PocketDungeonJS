import { Character } from "../models/character.mongoose.js";

export async function getCharacters(req, res){
    try{
        const arrayChar = await Character.find().lean()
        res.render('selectCharacter', {
            chars: arrayChar
        })
    }
    catch(error){
        console.log(error)
    }
}

export async function setCurrentCharacter(req, res){
    try{
        res.cookie('selectedCharacter', req.params.id)
        res.redirect('/game')
    }
    catch(error){
        console.log(error)
    }
}

export async function loadGame(req, res){
    try{
        const char = req.cookies.selectedCharacter
        res.render('game', {
            char: char
        })
    }
    catch(error){
        console.log(error)
    }
}
