import { HungryBear } from './../js/hungrybear.js';


$(document).ready(function() {
  $("#start").click(function(event){
    event.preventDefault();
    let fuzzy = new HungryBear("fuzzy");
    fuzzy.setHunger();
    fuzzy.countDownEnergy();
    fuzzy.decreaseHappiness();

    let energy = fuzzy.energy;
    let happiness = fuzzy.happiness;
    let statsUpdate = setInterval(() => {
      $('.food').html(fuzzy.foodLevel);
      $('.sleep').html(fuzzy.energy);
      $('.happy').html(fuzzy.happiness);
    }, 1000);
   });
  });
