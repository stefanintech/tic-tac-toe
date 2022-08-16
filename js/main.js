

let ticTacToe = { 
  // Winning moves
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

  //Player choices arrays
  player1Choices: [],
  player2Choices: [],

  //player turn
  playerTurn: 1,

  // HTML gameBoard div squares
  htmlGameBoardDivs: document.querySelectorAll(".cell"),

  //reset button
  reset: document.querySelector(".btn"),

  //display result
  result: document.querySelector('#result'),

  //Methods to check if either player has won
  //removes all click events if there is a winner
  checkForWinner: function() {    
    for(let i = 0; i < this.winningMoves.length; i++) {            
      if(this.winningMoves[i].every(number => this.player1Choices.includes(number))) {
          this.result.textContent = 'X wins'
          this.htmlGameBoardDivs.forEach( div => {
              div.removeEventListener('click', onClick)
          })
          break
      } else if(this.winningMoves[i].every(number => this.player2Choices.includes(number))) {
          this.result.textContent = 'O wins'
          this.htmlGameBoardDivs.forEach( div => {
              div.removeEventListener('click', onClick)
          })
          break
      } else if(this.player1Choices.length + this.player2Choices.length === 9) {
          this.result.textContent = 'Draw'
      }
    }
  },

  //place x or o into div
  //adds div id as a Number into choice array
  //changes between player 1 or 2 turn
  placeXOrO: function(boxID) {
      if(this.playerTurn === 1) {
          document.getElementById(boxID).textContent = 'X'
          document.getElementById(boxID).removeEventListener('click', onClick)
          this.player1Choices.push(Number(boxID))
          
          this.playerTurn++
      } else if(this.playerTurn === 2) {
          document.getElementById(boxID).textContent = 'O'
          document.getElementById(boxID).removeEventListener('click', onClick)
          this.player2Choices.push(Number(boxID))
          
          this.playerTurn--
      } 
  }
}

//add click event listener to each div
for (const div of ticTacToe.htmlGameBoardDivs) {
  div.addEventListener('click', onClick)
}
//add click event listener to reset button
ticTacToe.reset.addEventListener('click', resetBoard)

//reset game
//was unable to place this in ticTacToe object because player1Choices and player2Choices would not actually become empty
function resetBoard() {
  ticTacToe.htmlGameBoardDivs.forEach(div => {
      div.textContent = ''
      div.addEventListener('click', onClick)
  })
  ticTacToe.result.textContent = ''
  ticTacToe.player1Choices.splice(0)
  ticTacToe.player2Choices.splice(0)
  ticTacToe.playerTurn = 1

}

//grab id of element. place x or o into div.
function onClick(e) {
  let checkBox = Number(e.target.id)
  ticTacToe.placeXOrO(checkBox)
  ticTacToe.checkForWinner()
}