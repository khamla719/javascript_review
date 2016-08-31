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
  $("#sidebar").on("submit", "#post_form", function(e){
    e.preventDefault();
    var url = $(this).attr("action");
    var data = $(this).serialize();
    var request = $.ajax({
      method: "post",
      url: url,
      data: data
    })
    request.done(function(response){
      $("#posts").append(response);
      $("#post_form").remove();
      $("#new_post_link").toggle();
    })
  })
}
