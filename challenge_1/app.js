

// Create new board by adding to the DOM on page load
window.onload = function () {


  // Create new board by clearing the body and adding new board when button clicked


  // Place piece
  document.querySelectorAll('#board td').forEach(e =>
    e.addEventListener("click", function () {

      // Add X to table cell
      e.innerHTML = "X";
      console.log("clicked");
    }))

  // Check rows

  // Check columns

  // Check diagonals

  // Check for win

};

