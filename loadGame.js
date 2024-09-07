/* const char = document.getElementById("char")
const charSelect = document.getElementById("charSelect") */
const arrayChar = []
const hud = document.getElementById("hud")
export function loadGame(id){
        charSelect.innerHTML = ``
        hud.innerHTML = `
            <img src="assets/char/hud.webp" class="hud"></img>
            <img src="assets/char/${id}_portrait.webp" class="portrait"></img>
            <img src="assets/char/${id}_name.png" class="name"></img>`
        char.innerHTML =`
            <img src="assets/char/${id}_sprite.webp" class="char"></img>`
}
export function charSelectScreen(){
    fetch("database/char.JSON")
    .then((Response) => Response.json())
    .then((characters) => {
        let i = 0
        for(const character of characters){
            arrayChar[i] = character
            i++
        }
        charSelect.innerHTML = `
                <h1>Choose a Knight</h1>`
        for(const char of arrayChar){
            charSelect.innerHTML = charSelect.innerHTML + `
                <img src="assets/char/${char.id}_sprite.webp" onClick="selectChar('${char.id}')"  class="selectChar"></img>`
        }
    })
}
export function getChars(){
    fetch("./static/database/char.JSON")
    .then((Response) => Response.json())
    .then((characters) => {
        let i = 0
        for(const character of characters){
            arrayChar[i] = character
            i++
        }
    })
    return arrayChar
}