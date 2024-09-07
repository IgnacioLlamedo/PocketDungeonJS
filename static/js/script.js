const char = document.getElementById("char")
const charSelect = document.getElementById("charSelect")
const arrayChar = []
const hud = document.getElementById("hud")
function loadGame(id){
        charSelect.innerHTML = ``
        hud.innerHTML = `
            <img src="assets/char/hud (1).webp" class="hud"></img>
            <img src="assets/char/${id}_portrait.webp" class="portrait"></img>
            <img src="assets/char/${id}_name.png" class="name"></img>`
        char.innerHTML =`
            <img src="assets/char/${id}_sprite.webp" class="char"></img>`
}
function charSelectScreen(){
    location.assign('/selectcharacter')
}
function selectChar(id){
    const url = '/selectedcharacter/' + id
    location.assign(url)
}