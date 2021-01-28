// Include jQuery
var $ = require("jquery");

// Prevent default on form submit
$('#json-form-ajax').on('submit'), function(e) {

  // prevents default to redirect to new page
  e.preventDefault();
  console.log('click!');

  $.ajax({
    type: "POST",
    url: "/upload_json_ajax",
    accepts:
    data: data,
    success: function(data) {
      console.log(data);
    },
    contentType: 'multipart/form-data',
  });

};å


