const bicycle = {
  gear: 2,
  setGear(newGear) {
    gear = newGear;
  },
};
bicycle.setGear(5);
console.log(bicycle);

// defining objects in js

var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};

console.log(new SpaceShuttle("hello"));

//defining obj using class syntax

class SpaceShuttleTwo {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

console.log(new SpaceShuttleTwo("Yellow"));
