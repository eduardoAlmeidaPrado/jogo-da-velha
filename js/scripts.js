let x = document.querySelector(".x");
let o = document.querySelector(".o");
let tiles = document.querySelectorAll(".tile");
let optionButtons = document.querySelectorAll("#options button");
let resultContainer= document.querySelector("#result-container");
let resultMsg = document.querySelector("#result-container h2");
let resultScreenFilter = document.querySelector("#result-screen-filter");
let newGameButton = document.querySelector("#result-container button");
let gameEnded = false;
let secondPlayer;


let player1 = 0;
let player2 = 0;

for(let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener("click", function() {
        
        let element = checkElement(player1, player2);

        if(!gameEnded) {
            if(this.childNodes.length == 0) {
                let cloneElement = element.cloneNode(true);
    
                this.appendChild(cloneElement);
    
                if(player1 == player2) {
                    player1++;
                    
                    if(secondPlayer == 'ai-player') {
                        computerPlay();

                        player2++
                    }
                } else {
                    player2++;
                }
    
                checkWinCondition();
            }
        }
    });
}

for(let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].addEventListener("click", function() {
        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < optionButtons.length; j++) {
            optionButtons[j].style.display = 'none';
        }

        setTimeout(function() {
            let container = document.querySelector("#game-container");
            container.classList.remove("hide");
        }, 500);
    });
}

newGameButton.addEventListener("click", function() {
        
    resultContainer.classList.add("hide");
    resultScreenFilter.classList.add("hide");
    
   resetGame();
});

function checkElement(player1, player2) {
    
    if(player1 == player2){
        element = x;
        
    } else {
            element = o;
    }

    return element;
}

function checkWinCondition() {

    let tile1 = document.getElementById("tile-1");
    let tile2 = document.getElementById("tile-2");
    let tile3 = document.getElementById("tile-3");
    let tile4 = document.getElementById("tile-4");
    let tile5 = document.getElementById("tile-5");
    let tile6 = document.getElementById("tile-6");
    let tile7 = document.getElementById("tile-7");
    let tile8 = document.getElementById("tile-8");
    let tile9 = document.getElementById("tile-9");


    // horizontal
    if(tile1.childNodes.length > 0 
        && tile2.childNodes.length > 0 
        && tile3.childNodes.length > 0) {

            let tile1Child = tile1.childNodes[0].className; 
            let tile2Child = tile2.childNodes[0].className; 
            let tile3Child = tile3.childNodes[0].className; 

            if(tile1Child == 'x' && tile2Child == 'x' && tile3Child == 'x') {
                isWinner('x');
                gameEnded = true;
            } else if(tile1Child == 'o' && tile2Child == 'o' && tile3Child == 'o') {
                isWinner('o');
                gameEnded = true;
            }
    }

    if(tile4.childNodes.length > 0 
        && tile5.childNodes.length > 0 
        && tile6.childNodes.length > 0) {

            let tile4Child = tile4.childNodes[0].className; 
            let tile5Child = tile5.childNodes[0].className; 
            let tile6Child = tile6.childNodes[0].className; 

            if(tile4Child == 'x' && tile5Child == 'x' && tile6Child == 'x') {
                isWinner('x');
                gameEnded = true;
            } else if(tile4Child == 'o' && tile5Child == 'o' && tile6Child == 'o') {
                isWinner('o');
                gameEnded = true;
            }
    }

    if(tile7.childNodes.length > 0 
        && tile8.childNodes.length > 0 
        && tile9.childNodes.length > 0) {
            let tile7Child = tile7.childNodes[0].className; 
            let tile8Child = tile8.childNodes[0].className; 
            let tile9Child = tile9.childNodes[0].className; 

            if(tile7Child == 'x' && tile8Child == 'x' && tile9Child == 'x') {
                isWinner('x');
                gameEnded = true;
            } else if(tile7Child == 'o' && tile8Child == 'o' && tile9Child == 'o') {
                isWinner('o');
                gameEnded = true;
            }
    }

    // vertical
    if(tile1.childNodes.length > 0 
        && tile4.childNodes.length > 0 
        && tile7.childNodes.length > 0) {
            let tile1Child = tile1.childNodes[0].className; 
            let tile4Child = tile4.childNodes[0].className; 
            let tile7Child = tile7.childNodes[0].className; 

            if(tile1Child == 'x' && tile4Child == 'x' && tile7Child == 'x') {
                isWinner('x');
                gameEnded = true;
            } else if(tile1Child == 'o' && tile4Child == 'o' && tile7Child == 'o') {
                isWinner('o');
                gameEnded = true;
            }
    }

    if(tile2.childNodes.length > 0 
        && tile5.childNodes.length > 0 
        && tile8.childNodes.length > 0) {
            let tile2Child = tile2.childNodes[0].className; 
            let tile5Child = tile5.childNodes[0].className; 
            let tile8Child = tile8.childNodes[0].className; 

            if(tile2Child == 'x' && tile5Child == 'x' && tile8Child == 'x') {
                isWinner('x');
                gameEnded = true;
            } else if(tile2Child == 'o' && tile5Child == 'o' && tile8Child == 'o') {
                isWinner('o');
                gameEnded = true;
            }
    }

    if(tile3.childNodes.length > 0 
        && tile6.childNodes.length > 0 
        && tile9.childNodes.length > 0) {
            let tile3Child = tile3.childNodes[0].className; 
            let tile6Child = tile6.childNodes[0].className; 
            let tile9Child = tile9.childNodes[0].className; 

            if(tile3Child == 'x' && tile6Child == 'x' && tile9Child == 'x') {
                isWinner('x');
                gameEnded = true;
            } else if(tile3Child == 'o' && tile6Child == 'o' && tile9Child == 'o') {
                isWinner('o');
                gameEnded = true;
            }
    }

    // diagonal

    if(tile1.childNodes.length > 0 
        && tile5.childNodes.length > 0 
        && tile9.childNodes.length > 0) {
            let tile1Child = tile1.childNodes[0].className; 
            let tile5Child = tile5.childNodes[0].className; 
            let tile9Child = tile9.childNodes[0].className; 

            if(tile1Child == 'x' && tile5Child == 'x' && tile9Child == 'x') {
                isWinner('x');
                gameEnded = true;
            } else if(tile1Child == 'o' && tile5Child == 'o' && tile9Child == 'o') {
                isWinner('o');
                gameEnded = true;
            }
    }

    if(tile3.childNodes.length > 0 
        && tile5.childNodes.length > 0 
        && tile7.childNodes.length > 0) {
            let tile3Child = tile3.childNodes[0].className; 
            let tile5Child = tile5.childNodes[0].className; 
            let tile7Child = tile7.childNodes[0].className; 

            if(tile3Child == 'x' && tile5Child == 'x' && tile7Child == 'x') {
                isWinner('x');
                gameEnded = true;
            } else if(tile3Child == 'o' && tile5Child == 'o' && tile7Child == 'o') {
                isWinner('o');
                gameEnded = true;
            }
    }

    // velha

    let counter = 0;

    for(let i = 0; i < tiles.length; i++) {
        if(tiles[i].childNodes[0] != undefined) {
            counter++;
        }
    }

    if(counter == 9) {
        isWinner('velha');
        gameEnded = true;
    }
}

function isWinner(winner) {

    let scoreBoardX = document.querySelector("#scoreboard-1");
    let scoreBoardO = document.querySelector("#scoreboard-2");
    let msg = '';

    if(winner == 'x') {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        msg = 'O jogador 1 venceu!';
    } else if(winner == 'o') {
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
        msg = 'O jogador 2 venceu!';
    } else {
        msg = 'Deu velha!';
    }

    resultMsg.innerHTML = msg;
    resultContainer.classList.remove("hide");   
    resultScreenFilter.classList.remove("hide"); 
}

function resetGame() {
    
    player1 = 0;
    player2 = 0;
    gameEnded = false;

    let tilesToClear = document.querySelectorAll(".tile div");

    for(let i = 0; i < tilesToClear.length; i++) {
        tilesToClear[i].parentNode.removeChild(tilesToClear[i]);
    }
}

function computerPlay() {

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < tiles.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);

        if(tiles[i].childNodes[0] == undefined) {
            if(gameEnded) {
                break;
            }

            if(randomNumber <= 1) {
                tiles[i].appendChild(cloneO);
                counter++;
                break;
            }
        } else {
            filled++;
        }
    }

    if(counter == 0 && filled < 9) {
        computerPlay();
    }
}