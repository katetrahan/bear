import { HungryBear } from './../js/hungrybear.js';

describe('HungryBear', function () {
  let fuzzy;

  beforeEach(function() {
    fuzzy = new HungryBear('Fuzzy');
    jasmine.clock().install();
    fuzzy.setHunger();
    fuzzy.countDownEnergy();
    fuzzy.decreaseHappiness();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

// Hunger, Starving and Feeding
  it('should have a name and a food level of 10 when it is created', function(){
    console.log(fuzzy.foodLevel + 'before');
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    console.log(fuzzy.foodLevel + 'before');
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    console.log(fuzzy.foodLevel + 'before');
    fuzzy.foodLevel = 0;
    fuzzy.didFuzzyStarve();
    expect(fuzzy.life).toEqual(false);
  });

  it('should not get hungry if the food level does not drop below zero', function() {
    // fuzzy.foodLevel = 10;
    fuzzy.didFuzzyStarve();
    expect(fuzzy.life).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    fuzzy.didFuzzyStarve();
    expect(fuzzy.life).toEqual(false);
  });

  it('should have a food level of ten if it is fed', function() {
    console.log(fuzzy.foodLevel + "after");
      console.log(fuzzy);
    jasmine.clock().tick(10001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });

// Energy, FallAsleep and Rest
  it('sets energy level to 10 when created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.energy).toEqual(10);
  });

  it('should have a energy level of 7 after 3001 milliseconds', function() {
    console.log(fuzzy.energy + 'before');
    jasmine.clock().tick(3001);
    expect(fuzzy.energy).toEqual(7);
  });

  it('should get very sleepy if the energy level drops below zero', function() {
    fuzzy.energy = 0;
    fuzzy.fuzzyFellAsleep();
    expect(fuzzy.sleep).toEqual(true);
  });

  it('should not get sleepy if the energy level does not drop below zero', function() {
    fuzzy.fuzzyFellAsleep();
    expect(fuzzy.sleep).toEqual(false);
  });

  it('should get very sleepy if 10 seconds pass without sleeping', function() {
    jasmine.clock().tick(10001);
    fuzzy.fuzzyFellAsleep();
    expect(fuzzy.sleep).toEqual(true);
  });

  it('should have a energy level of ten if it is rested', function() {
    jasmine.clock().tick(10001);
    fuzzy.rest();
    expect(fuzzy.energy).toEqual(10);
  });

  it('should have a energy level of ten if it is rested', function() {
    console.log(fuzzy);
    jasmine.clock().tick(10001);
    fuzzy.rest();
    expect(fuzzy.energy).toEqual(10);
    expect(fuzzy.sleep).toEqual(false);
  });

  // Happiness, Pissed off, and playtime

  it('sets Happiness level to 10 when created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.happiness).toEqual(10);
  });

  it('should have a Happiness level of 7 after 3001 milliseconds', function() {
    console.log(fuzzy.happiness + 'before');
    jasmine.clock().tick(3001);
    expect(fuzzy.happiness).toEqual(7);
  });

  it('should get very pissed if the happiness level drops below zero', function() {
    fuzzy.happiness = 0;
    fuzzy.fuzzysPissedOff();
    expect(fuzzy.pissed).toEqual(true);
  });

  it('should not get pissed if the happiness level does not drop below zero', function() {
    fuzzy.fuzzysPissedOff();
    expect(fuzzy.pissed).toEqual(false);
  });

  it('should get very sleepy if 10 seconds pass without play', function() {
    jasmine.clock().tick(10001);
    fuzzy.fuzzysPissedOff();
    expect(fuzzy.pissed).toEqual(true);
  });

  it('should have a happiness level of ten if it is rested', function() {
    jasmine.clock().tick(10001);
    fuzzy.play();
    expect(fuzzy.happiness).toEqual(10);
  });

  it('should have a happiness level of ten if it is played with', function() {
    jasmine.clock().tick(10001);
    fuzzy.play();
    expect(fuzzy.happiness).toEqual(10);
    expect(fuzzy.pissed).toEqual(false);
  });















  // it('should return death message when food level is less than 0', function() {
  //   //  jasmine.clock().tick(10001);
  //   //  fuzzy.painfulDeath();
  //   //  expect(fuzzy.life).toEqual(false));
  // });

})
