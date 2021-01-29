window.onload = function () {


  const filename = document.querySelector('input#jsonfileajax');
  let data = '';

  filename.addEventListener('change', function () {
    // Creating a FileReader object using the constructor.
    const filereader = new FileReader();
    // Reading a file as plain text
    filereader.readAsText(filename.files[0]);
    // Call this function to print the contents of the file
    // once the file has been read.
    filereader.onload = function () {
      data = filereader.result;
      console.log(typeof data);
      console.log('the data is ', data);
    };
    // Print the error incase there is one
    filereader.onerror = function () {
      console.log("Error: ", filereader.error);
    };
  }, false);



  $('#json-form-ajax button.submit').on('click', function (e) {

    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "/",
      data: data,
      contentType: 'text/html',
      processData: false,
      success: function (data) {
        console.log('success! ', data);
      },
      error: function (error) {
        console.log('error', error);
      }
    });

  });

};
