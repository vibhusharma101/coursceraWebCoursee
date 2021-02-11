var voxel = { x: 3.6, y: 7.4, z: 6.54 };

const { x: a, y: b, z: c } = voxel;

console.log(a);

const AVG_TEMP = {
  today: "72.4",
  tomorrow: "77.5",
};

function getTempOfTom(avgTemperatures) {
  const { tomorrow: TomTemp } = AVG_TEMP;
  return TomTemp;
}
console.log(getTempOfTom(AVG_TEMP));

//nested destructuring

const TEMPERATURES_RANGE = {
  today: { max: "23", min: "16" },
  tomorrow: { max: "26", min: "9" },
};
function getMaxOfTom(temperatureRange) {
  const {
    tomorrow: { max: myAns },
  } = temperatureRange;
  return myAns;
}
console.log(getMaxOfTom(TEMPERATURES_RANGE));

//destructuring from array

const [la, , lb] = [23, 24, 25, 34];

console.log(la, lb);

//swapping elements

let sa = 4;
let sb = 6;
//isme const mat karo kyuki then values will not change
[sa, sb] = [sb, sa];
//making function calls directly
(() => {})();
console.log(sa, sb);
