

// Create new board by adding to the DOM on page load
window.onload = function () {


  let turn = 1;

  // Keep track of clicks, and each click increment turn
  // If turn is even, place X
  // If turn is odd, place 0

  // Adds event listener to each table cell
  document.querySelectorAll('#board td').forEach(e =>
    e.addEventListener("click", function () {

      // Check to see which pla
      // Add X to table cell
      if (turn % 2 === 1 )  {
        e.innerHTML = "X";
      } else {
        e.innerHTML = "O";
      }
      turn++;
      console.log("turn", turn);
    }));

  // Create new board by clearing the body and adding new board when button clicked

  // Check rows

  // Check columns

  // Check diagonals

  // Check for win







};

