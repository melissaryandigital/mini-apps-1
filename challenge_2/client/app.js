window.onload = function () {

  $('#json-form-ajax button.submit').on('click', function (e) {

    e.preventDefault();

    var formData = new FormData();
    formData.append('jsonfileajax', $('#jsonfileajax')[0].files[0]);

    $.ajax({
      method: "POST",
      url: "/",
      data: formData,
      contentType: false,
      processData: false,
      success: function (data) {
        console.log('success');
        $('#ajax-results').append(data);
        $('#report-results').append(`<form method="get" action="\/reports\/CSVReport.csv"><button type="submit">Download Report</button></form>`);
      },
      error: function (error) {
        console.log('error', error);
      }
    });

  });
};