$(document).ready(function() {
  showForm();
  postForm();
})

var showForm = function() {
  $("#new_post_link").on("click", function(e){
    e.preventDefault();
    $(this).hide();
    var url = $(this).attr("href");
    var request = $.ajax({
      url: url
    })

    request.done(function(response){
      $("#sidebar").append(response);
    })
  })
}

var postForm = function() {

}
