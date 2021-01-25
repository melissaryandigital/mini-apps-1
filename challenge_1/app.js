

// Create new board by adding to the DOM on page load
window.onload = function () {


  // Variable to keep track of whose turn it is
  let turn = 1;

  // Adds event listener to each table cell
  document.querySelectorAll('#board td').forEach(e =>
    e.addEventListener("click", function () {


      // If turn is even, place X
      // If turn is odd, place 0

      if (turn % 2 === 1) {
        e.innerHTML = "X";
      } else {
        e.innerHTML = "O";

      }

      turn++;

    }));


  // New game button resets all table cells to empty
  document.getElementById('newgame').addEventListener('click', function() {
    document.querySelectorAll('#board td').forEach(el =>
      {
        el.innerHTML = '';
      })
  });


  // Create new board by clearing the body and adding new board when button clicked

  // Check rows

  // Check columns

  // Check diagonals

  // Check for win







};

