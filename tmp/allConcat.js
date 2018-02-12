export class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.life = true;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
    console.log(this.foodLevel);
  }

  didYouGetEaten() {
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


}
