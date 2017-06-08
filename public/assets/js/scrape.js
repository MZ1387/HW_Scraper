
// submitting a new value
$("#scrape").on("click", function(event) {

    event.preventDefault();

    $.ajax({
      url: "/scrape",
      method: "GET",
      success: function(res) {

        console.log(res);

        // $.getJSON("/articles", function(data) {
        //
        //   console.log("get articles");
        //   // // For each one
        //   // for (var i = 0; i < data.length; i++) {
        //   //   // Display the apropos information on the page
        //   //   $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
        //   // }
        // });


      },
      error: function(err) {
        console.log(err);
      }
    });


});
