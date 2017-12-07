function romanNumCalc(input) {
  return input;

}




$(document).ready(function() {
  $("#romanNumCalc").submit(function(event){
    event.preventDefault();
    var input = $("#numEntry").val();
    $("#result").empty();
    var result = romanNumCalc(input);
    $("#result").append(result);
  });
});
