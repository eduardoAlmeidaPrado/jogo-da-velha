const TILES = document.querySelectorAll(".tile");
const PLAYER_X = "X";
const PLAYER_O = "O";
let playerTurn = true; // X = true O = false

const WIN = [
    [0, 1 ,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

document.addEventListener("click", (event) => {
    if(event.target.matches(".tile")) {
        start(event.target.id);
    }
});

function start(id) {
    const tile = document.getElementById(id);
    turn = playerTurn ? PLAYER_X : PLAYER_O;
    tile.classList.add(turn);
    updateGame(turn);
}

function updateGame(turn) {
    const playerWin = WIN.some((comb) => {
        return comb.every((index) => {
            return TILES[index].classList.contains(turn);
        });
    });

    if(playerWin) {
        endGame(turn);
    } else if(isDraw()) {
        endGame();
    } else {
        playerTurn = !playerTurn;
    }
}

function isDraw() {
    let x = 0;
    let o = 0;

    for(index in TILES) {
        if(!isNaN(index)) {
            if(TILES[index].classList.contains(JOGADOR_X)) {
                x++;
            }
    
            if(TILES[index].classList.contains(JOGADOR_O)) {
                o++;
            }
        }
    }

    return x + o === 9 ? true : false;
}

function endGame(playerWin = null) {
    if(playerWin) {
        console.log(playerWin + " venceu!");
    } else {
        console.log("Empate!");
    }
}