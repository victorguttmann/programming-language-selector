$(document).ready(function() {
  $("formName").submit(function(event) {
    var userName = $("input#name1").val();
    $(".nameSpan").text(userName);
    $("#greetingCreepy").show();
    event.preventDefault();
  });
});
