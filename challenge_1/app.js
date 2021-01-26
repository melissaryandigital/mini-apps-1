

// Create new board by adding to the DOM on page load
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

  // Adds event listener to each table cell
  document.querySelectorAll('#board td').forEach(el => el.addEventListener("click", handleClick));

  // Handles clicks on the spaces
  function handleClick(clickedSpace) {

    // If game is over, display a message and do now allow additional clicks
    if (!gameActive) {
      document.getElementById('text').innerHTML = 'Game is over, click New Game button!';
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
      checkForWin(board, winningCombos, currentPlayer);

      switchPlayer();
    }
  };

  // Pass in the space and the player
  function updateBoardModel(spaceId, player) {
    board[spaceId] = player;
    //console.log(board);
  };

  function checkForWin(board, winningCombos, player) {

    console.log(board);
    console.log(winningCombos);
    console.log(player);

    // Loop through winning combos
    // Check to see if currentBoard has currentPlayer in any of these spots

    // Iterate through winning combos and see if current player's space match
    // any of these combos
    for (var i = 0; i < winningCombos.length; i++) {
      let space1 = board[winningCombos[i][0]];
      let space2 = board[winningCombos[i][1]];
      let space3 = board[winningCombos[i][2]];
      //console.log(space1, space2, space3);

      if (space1 === player && space2 === player && space3 === player) {
        console.log('We have a win!');
        document.getElementById('text').innerHTML = `Player ${currentPlayer} is the winner!`;
        //console.log('spaces', space1, space2, space3);
        //console.log(currentPlayer);
        gameActive = false;
      }

    }

    // If

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
    document.getElementById('text').innerHTML = 'Someone has already picked that space, please choose another!';
    // Need to remove this text
  };


  // New Game
  // Updates table cells to empty on view
  // Updates board model to empty
  // Sets game status back to active

  document.getElementById('newgame').addEventListener('click', function () {

    // Update game status to active
    gameActive = true;
    board = {};

    document.querySelectorAll('#board td').forEach(el => {
      el.innerHTML = '';
    });

  });



};

