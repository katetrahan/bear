export class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.life = true;
    this.energy = 10;
    this.sleep = false;
    this.happiness = 10;
    this.pissed = true;
  }


// Hunger, Starving and Feeding
  setHunger() {
    setInterval(() => {
      if (this.foodLevel > 0) {
        this.foodLevel--;
      }
    }, 1000);
    console.log(this.foodLevel);
  }

  didFuzzyStarve() {
    this.life = false;
    if (this.foodLevel > 0) {
      this.life = true;
      console.log("life is true");
    }
    return this.life;
  }

  feed() {
    this.foodLevel = 10;
  }


// Energy, FallAsleep and Rest
  countDownEnergy() {
    setInterval(() => {
      if(this.energy > 0){
        this.energy--;
      }
    }, 1000);
    console.log(this.energy);
  }

  fuzzyFellAsleep() {
    this.sleep = true;
    if (this.energy > 0) {
      this.sleep = false;
      console.log("sleep is false");
    }
    console.log(this.sleep);
  }

  rest() {  // had to change from sleep to rest (sleep was confusing it)
    this.sleep = false;
    this.energy = 10;
  }

// Happiness, Pissed off, and playtime

  decreaseHappiness(){
    setInterval(() => {
      if(this.happiness > 0){
      this.happiness--;  
      }
    }, 1000);
    console.log(this.happiness);
  }

  fuzzysPissedOff() {
    this.pissed = true;
    if (this.happiness > 0) {
      this.pissed = false;
      console.log("pissed is false");
    }
    console.log(this.pissed);
  }

  play() {
    this.pissed = false;
    this.happiness = 10;
  }

}
