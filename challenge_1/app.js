window.onload = function () {


  let currentPlayer = 'X';
  let board = {};
  let gameActive = true;
  let winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  let message = ['Play on!', 'Game is over, click New Game button!', `It's a tie!  Click 'New Game' to start again!`, 'Someone has already picked that space, please choose another!' ];



  // Adds event listener to New Game button
  document.getElementById('newgame').addEventListener('click', newGame);

  // Adds event listener to each table cell
  document.querySelectorAll('#board td').forEach(el => el.addEventListener("click", handleClick));

  // Changes game status message


  // Handles clicks on the spaces
  function handleClick(clickedSpace) {

    document.getElementById('text').innerHTML = message[0];
    // If game is over, display a message and do now allow additional clicks

    if (!gameActive) {
      document.getElementById('text').innerHTML = message[1];
    }

    if (gameActive) {
      let clicked = clickedSpace.target;
      let clickedId = clickedSpace.target.id;

      if (clicked.innerHTML !== '') {
        isEmpty();
        return;
      }

      clicked.innerHTML = currentPlayer;

      updateBoardModel(clickedId, currentPlayer);
      checkForWinOrTie(board, winningCombos, currentPlayer);
      switchPlayer();
    }
  };

  // Updates the current board object
  function updateBoardModel(spaceId, player) {
    board[spaceId] = player;
  };

  // Checks for win or tie
  function checkForWinOrTie(board, winningCombos, player) {

    // Iterate through winning combos and see if current player's space match
    // Check to see if currentBoard has currentPlayer in any of these spots
    for (var i = 0; i < winningCombos.length; i++) {
      let space1 = board[winningCombos[i][0]];
      let space2 = board[winningCombos[i][1]];
      let space3 = board[winningCombos[i][2]];

      if (space1 === player && space2 === player && space3 === player) {
        document.getElementById('text').innerHTML = `Player ${currentPlayer} is the winner!`;
        gameActive = false;
      }
    }

    // Check to see if the board is full
    console.log(Object.keys(board).length);
    if (Object.keys(board).length === 9) {
      document.getElementById('text').innerHTML = message[2];
      gameActive = false;
    }

  };

  // Handles switching the player's turns
  function switchPlayer() {

    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    return currentPlayer;

  };

  // Checks if the space is empty before playing
  function isEmpty() {
    document.getElementById('text').innerHTML = message[3];
    // Need to remove this text
  };


  // New Game
  // Updates table cells to empty on view
  // Updates board model to empty
  // Sets game status back to active

  function newGame() {
    //document.getElementById('newgame').addEventListener('click', function () {

      // Update game status to active
      gameActive = true;
      isTie = false;
      board = {};
      document.getElementById('text').innerHTML = message[0];

      document.querySelectorAll('#board td').forEach(el => {
        el.innerHTML = '';
      });



  }

};

