const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
const twice = (a, b, c) => {
  const args = [a, b, c];
  return args.reduce((x, y) => {
    x.push(2 * y);
    return x;
  }, []);
};
console.log(sum(2, 3, 4));
console.log(twice(2, 3, 4));
