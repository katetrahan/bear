var RomanNum = require('./../js/romancalc.js').romanNumModule;


$(document).ready(function() {
  $("#romanNumCalc").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#numEntry").val());
    $("#result").empty();
    var romanNumCalc = new RomanNum("hot pink");
    var romeNum = romanNumCalc.convertor(input);
    console.log(romeNum);
    $("#romeNum").append(romeNum);
  });
});
