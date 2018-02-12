import { HungryBear } from './../js/hungrybear.js';

describe('HungryBear', function () {
  let fuzzy = new HungryBear('Fuzzy');

  beforeEach(function() {
    // let fuzzy = new HungryBear('Fuzzy');
    jasmine.clock().install();
    fuzzy.setHunger();
    // fuzzy.painfulDeath();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

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
    fuzzy.didYouGetEaten();
    expect(fuzzy.life).toEqual(false);
  });

  it('should not get hungry if the food level does not drop below zero', function() {
    fuzzy.foodLevel = 10;
    fuzzy.didYouGetEaten();
    expect(fuzzy.life).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    console.log(fuzzy.life + "before");
    console.log(fuzzy.foodLevel + 'before');
    jasmine.clock().tick(10001); // you die at 7 seconds for some reason :(
    fuzzy.didYouGetEaten();
    console.log(fuzzy.life + "after");
    expect(fuzzy.life).toEqual(false);
  });

  it('should have a food level of ten if it is fed', function() {
    console.log(fuzzy.foodLevel + "before");

    fuzzy.foodLevel = 10;
    console.log(fuzzy.foodLevel + "after");
      console.log(fuzzy);
    jasmine.clock().tick(10001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });

  // it('should return death message when food level is less than 0', function() {
  //   //  jasmine.clock().tick(10001);
  //   //  fuzzy.painfulDeath();
  //   //  expect(fuzzy.life).toEqual(false));
  // });

})
