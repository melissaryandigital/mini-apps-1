

// Create new board by adding to the DOM on page load
window.onload = function () {

  let currentPlayer = 'X';
  let board = {};
  let winnigCombos = [
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

    let clicked = clickedSpace.target;
    let clickedId = clickedSpace.target.id;

    if (clicked.innerHTML !== '') {
      isEmpty();
    }

    clicked.innerHTML = currentPlayer;

    updateBoardModel(clickedId, currentPlayer);
    checkForWin(board, currentPlayer);
    //checkForTie();
    switchPlayer();
  };

  // Pass in the space and the player
  function updateBoardModel(spaceId, player) {
    board[spaceId] = player;
    console.log(board);
  };

  function checkforWin(currentBoard, player) {

  // Loop through winning combos
  // Check to see if currentBoard has currentPlayer in any of these spots

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


  // New game button resets all table cells to empty
  document.getElementById('newgame').addEventListener('click', function () {
    document.querySelectorAll('#board td').forEach(el => {
      el.innerHTML = '';
    })
  });
};

