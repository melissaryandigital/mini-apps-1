

// Create new board by adding to the DOM on page load
window.onload = function () {


  // Variable to keep track of whose turn it is
  let Xturn = true;

  // Adds event listener to each table cell
  document.querySelectorAll('#board td').forEach(el => el.addEventListener("click", handleClick));

  function handleClick(clickedSpace) {

    // If turn is even, place X
    // If turn is odd, place 0

    let clicked = clickedSpace.target;

    if (Xturn === true) {
      clicked.innerHTML = "X";
    } else {
      clicked.innerHTML = "O";
    }

    switchTurn();
  }


  function switchTurn() {

    if (Xturn) {
      Xturn = false;
    } else {
      Xturn = true;
    }

  };

  // Function to check if the space is empty before playing
  function isEmpty() {

  };

  // New game button resets all table cells to empty
  document.getElementById('newgame').addEventListener('click', function () {
    document.querySelectorAll('#board td').forEach(el => {
      el.innerHTML = '';
    })
  });

  let board = {

  };


  // Keep track of which td has

  // Determine if there is a win

  // Create new board by clearing the body and adding new board when button clicked

  // Check rows

  // Check columns

  // Check diagonals

  // Check for win







};

