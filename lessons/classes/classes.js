// TODO: convert the es5 constructors to classes


function Character(name, stats) {
  this.name = name;
  this.type = stats.type;
  this.health = stats.health;
  this.power = stats.power;
}

Character.prototype.attack = function() {
  console.log(this.name + ' is attacking!');
  console.log('Dished out ' + this.power + ' damage!');
}

function Scout(name, stats){
  stats.type = 'scout';
  Character.call(this, name, stats);
}

Scout.prototype = Object.create(Character.prototype);
Scout.prototype.searchForEnemies = function() {
  console.log(this.name + ' is searching for enemies!');
  var random = Math.floor((Math.random() * 7) + 1);
  console.log('...spotted ' + random + ' enemies');
};

Scout.prototype.attack = function() {
  console.log('Adjusting scope...');
  Character.prototype.attack.call(this);
};

Scout.prototype.constructor = Scout;

var scout = new Scout('scott', {health: 23, power: 67});

scout.searchForEnemies();
scout.attack();


