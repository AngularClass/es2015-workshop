// TODO: find wher eit might be better to use a Map, Weakmap, Set, or Weakset

const memoize = (fn) => {
  const func = (...args) => {
    // stringify here?! can we us something else?
    const key = JSON.stringify(args);
    if (!(key in func.cache)) {
      console.log('not cache');
      func.cache[key] = fn.apply(this, args);
    }
    return func.cache[key];
  };
  func.cache = {};
  return func;
};

const add = memoize((a, b) => {
  return 1 + 20;
});

add(1,2);
add(1,2); // hit cache
