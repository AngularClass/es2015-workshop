// TODO: keep the code working but use arrow functions when you can

'abcd'.split('').forEach(function(letter, i){
  console.log(`${letter}: ${i}`);
});



const createMenu = function(name) {
  this.menueName = name;
  this.items = ['fruit', 'crackers', 'new orleans coffee']
  return {
    showMenu: function() {
      console.log(`${this.menueName}:`);
      this.items.forEach(function(item, i) {
        console.log(`${i}. ${item}`);
      });
    }
  }
}

const menu = createMenu('Sunbeam Coffee');
// menu.showMenu()




// all the curries
const makeCurry = function(first) {
  return function(second) {
    return function(last) {
      console.log(`1. cook the ${first} on low temp`);
      console.log(`2. stir in the ${second} and mix well.`);
      console.log(`3. add just a pich of ${last} and let simmer`);
    }
  }
}

makeCurry('beef')('sauce')('garlic');





