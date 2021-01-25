

// Create new board by adding to the DOM on page load
window.onload = function () {


  // Variable to keep track of whose turn it is
  let currentPlayer = 'X';

  // Adds event listener to each table cell
  document.querySelectorAll('#board td').forEach(el => el.addEventListener("click", handleClick));

  // Handles clicks on the spaces
  function handleClick(clickedSpace) {

    // If turn is even, place X
    // If turn is odd, place 0

    let clicked = clickedSpace.target;

    if (clicked.innerHTML !== '') {
      isEmpty();
    }

    clicked.innerHTML = currentPlayer;

    switchPlayer();
    updateBoardModel();

  }

  let board = {

  };


  // // Pass in the space and the player
  // updateBoardModel(){

  // };


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
  };


  // New game button resets all table cells to empty
  document.getElementById('newgame').addEventListener('click', function () {
    document.querySelectorAll('#board td').forEach(el => {
      el.innerHTML = '';
    })
  });




  // Keep track of which td has

  // Determine if there is a win

  // Create new board by clearing the body and adding new board when button clicked

  // Check rows

  // Check columns

  // Check diagonals

  // Check for win







};

