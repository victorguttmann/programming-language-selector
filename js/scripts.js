$(document).ready(function() {
  $("formName").submit(function(event) {
    var userName = $("input#name1").val();
    $(".nameSpan").text(userName);
    $("#greetingCreepy").show();
    event.preventDefault();
  });
});

$(document).ready(function() {
  $("formQ3").submit(function(event) {
    var question3entry = $("input#question3").val();
    $(".resultSpan").text(question3entry);
    $("#decisionTime").show();
    event.preventDefault();
  });
});
