let ticTacToe = {
  // Tic Tac Toe Board
  gameBoard: [0, 1, 2, 
              3, 4, 5, 
              6, 7, 8],

  // Combination of winning moves
  winningMoves: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],

  // Players and their symbols
  playerOne: "X",
  playerTwo: "O",

  

// BELOW THIS IT'S ALL EXPERIMENTAL - FEEL FREE TO DELETE AND REWORK


  // Add click counter - Odd number is Player 1, Even number is Player 2
  // Boolean set to true for Player 1, set to false after symbol for Player 2's turn.

  // HTML gameBoard
  htmlGameBoardDivs: document.querySelectorAll(".cell"),

  // Event Listener
  addEventListener: function() {
    this.htmlGameBoardDivs.addEventListener("click", this.placeX)
  },

  // Functions
   placeX: function() {
    this.htmlGameBoardDivs.forEach((node) => {
        node.innerText = this.playerOne;
    })
    }
}
// Octo Help
// let obj = {
//     htmlGameBoardDivs: document.querySelectorAll(".cell"),
//   }
  
//   for (const div of obj.htmlGameBoardDivs) {
//     div.addEventListener(foo)
//   }
  
//   function foo(event) {
//     // do things
// }