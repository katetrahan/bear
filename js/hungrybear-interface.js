import { HungryBear } from './../js/hungrybear.js';


$(document).ready(function() {
  $("#start").click(function(event){
    event.preventDefault();
    $('.food').empty();
    let fuzzy = new HungryBear("fuzzy");
    let pleasework = setInterval(() => {
      if (fuzzy.didFuzzyStarve()) {
        alert("this works")
      }
    })

  })
})
