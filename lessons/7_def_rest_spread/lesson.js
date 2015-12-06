// TODD: use spread, defaults, and rest where you see fit

const add = (a, b) => {
  b = b || 0;
  return a + b;
};
console.log('add ', add(20, 10));
/*******************************************/


const getSlope = m => x => {
  if (!Number.isFinite(x)) {
    x = 1;
  }
  return b => {
    if (!Number.isFinite(b)) {
      b = 0;
    }
    return (m * x) + b;
  }
};

console.log('slope ', getSlope(12)(12)(21))
/*******************************************/


const log = function(tag) {
  const args = [].slice.call(arguments, 1);
  tag = `[${tag.toUpperCase()}]: `;
  args.unshift(tag);
  console.log.apply(console, args);
};

log('debug', 'wassup', 'doggy');
/*******************************************/


const exponentiate = (base, exponent) => {
  exponent = exponent || 2;
  return Math.pow(base, exponent);
};

exponentiate(10) // === 100
/*******************************************/

const filter = function(cb) {
  return Array.from(arguments).slice(1)
  .filter(cb);
};

console.log(
  'filter',
  filter(item => item % 2 === 0, 1,2,3,4,5,6,10,11,23,20,38)
);

/*******************************************/

const mergeArrays = function(target) {
  const otherArrays = Array.from(arguments).slice(1);

  return otherArrays.reduce((result, sourceArray) => {
    return result.concat(sourceArray);
  }, target);
};

console.log('mergeArrays ', mergeArrays([1,2], [3,4,5], [6,7,8]));
/*******************************************/


const immutablePush = function(source) {
  const items = Array.from(arguments).slice(1);
  return [].concat(source, items);
};

console.log(
  'immutable',
  immutablePush([1, 'hey'], 'yo', 'me')
);
/*******************************************/
