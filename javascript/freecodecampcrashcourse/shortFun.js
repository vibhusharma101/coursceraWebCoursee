var magic = () => new Date();
console.log(magic());

var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//square chapter
var numArr = [4, -5.2, 3, 3.3, 16];
const squareList = (arr) => {
  return arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
};
console.log(squareList(numArr));

//passing default value into function param

const increment = (num, value = 1) => num + value;
console.log(increment(2, 2));
console.log(increment(2));
