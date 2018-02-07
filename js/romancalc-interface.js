var RomanNum = require('./../js/romancalc.js').romanNumModule;


$(document).ready(function() {
  $("#romanNumCalc").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#numEntry").val());
    $("#result").empty();
    var romanNumCalc = new RomanNum("five");
    var romeNum = romanNumCalc.converter(input);
    console.log(romeNum);
    $("#romeNum").append(romeNum);
  });
});
