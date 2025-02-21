const TILES = document.querySelectorAll(".tile");
const PLAYER_X = "X";
const PLAYER_O = "O";
let playerTurn = true; // X = true O = false

document.addEventListener("click", (event) => {
    if(event.target.matches(".tile")) {
        start(event.target.id);
    }
});

function start(id) {
    const tile = document.getElementById(id);
    turn = playerTurn ? PLAYER_X : PLAYER_O;
    tile.textContent = turn;
    playerTurn = !playerTurn;
}