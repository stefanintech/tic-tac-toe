
let gameBoard = [0, 1, 2, 
                 3, 4, 5, 
                 6, 7, 8]

winningMoves = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

//Pseudocode

// stefan - Turns
// constantNnoble - Placing the X or O in gameBoard (and not be reassigned once placed)
// Jodandan - Check for winningMoves match each turn

// Player 1 - X
// Player 2 - O

// Player 1 goes first and places a X somewhere in the board
// Turns
// Place X on the board (array)


gameBoard[4] = "X"

// Once they place the X, Player 1 ends turn
// Player 2 goes second and places an O somewhere in the board

gameBoard[4] = "O"


// Have a function check for winningMoves match each turn
// stalemate?

function checkWinningMoves () {
if (something) {
  return "PLAYER 1 WINS";
} else if (something) {
   return "PLAYER 2 WINS"
} else {
   return "STALEMATE"
}
}

// Alert when there is a winningMoves match