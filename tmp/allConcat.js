export class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.life = true;
    this.energy = 10;
    this.sleep = false;
    this.happiness = 10;
  }


// Hunger, Starving and Feeding
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
    console.log(this.foodLevel);
  }

  didFuzzyStarve() {
    this.life = false;
    if (this.foodLevel > 0) {
      this.life = true;
      console.log("life is true");
    }
    console.log(this.life);
  }

  feed() {
    this.foodLevel = 10;
  }


// Energy, FallAsleep and Rest
  countDownEnergy() {
    setInterval(() => {
      this.energy--;
    }, 1000);
    console.log(this.energy);
  }

  setTimeout(function () {
    this.sleep = true;

    if (this.energy > 0) {
      this.sleep = false;
      console.log("sleep is false");
    }
    console.log(this.sleep);


}, 180000);


  rest() {  // had to change from sleep to rest (sleep was confusing it)
    this.energy = 10;
  }

// Happiness, Pissed off, and playtime


}
