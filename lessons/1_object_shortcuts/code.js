// TODO: simplify the code below to take advantage of object shortcuts

const collection = function(){
  const _collection = [];

  const add = function(item) {
    _collection.add(item);
  };
  const remove = function(idx) {
    _collection.splice(idx);
  };
  const getOne = function(idx) {
    return _collection[idx];
  };

  return {
    add: add,
    remove: remove,
    getOne: getOne
  };
};

const utils = {
  version: '1.2.3',
  save: function() {
    console.log('...saving');
  },
  fetch: function() {
    console.log('...fetching');
  },
  update: function() {
    console.log('...updating');
  }
};
