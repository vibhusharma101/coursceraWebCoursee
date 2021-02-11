let stats = {
  a: 2,
  b: 3,
  c: 4,
};
function BPlusC({ b: x, c: y }) {
  return x + y;
}
console.log(BPlusC(stats));
