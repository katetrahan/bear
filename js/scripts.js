function romanNumCalc(input) {
  if (input > 3999) {
    input = "Number too high";
    return input;
  } else {
    return input;
  }
}




$(document).ready(function() {
  $("#romanNumCalc").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#numEntry").val());
    $("#result").empty();
    var result = romanNumCalc(input);
    $("#result").append(result);
  });
});
