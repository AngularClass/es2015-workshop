// TODO: use new variables and string enhancements to fix up code

var message = 'I am the outer message';

if (true) {
  var message = 'I am the inner message';
  console.log('inner: ' + message);
}
console.log('outer: ' + message);
// should not change!
console.log('message has changed? ', message !== 'I am the outer message');
/*******************************************/


// Please clean this up!
var logger = function(tag, message) {
  var time = new Date().toLocaleTimeString();

  console.log('[' + time +'] ' + tag.toUpperCase() + ':\n             ' + message.trim());
};

var data = {id: 123, value: 'hey'};
logger('debbuger', 'the data: ' + JSON.stringify(data));

// don't remove this!
data = false;

// but data is false now? prevent that!
logger('debbuger', 'data value: ' + data.value);
/*******************************************/



// Nightmare mode:
// Like any template lib, we are using an object to replace
// placeholders in a string with real values on the object
// use ES2015 string literals and tags to make this happen instead
var message = 'Hey there ${name}, do you like ${food} ?';
var data = {name: 'Rauria', food: 'butter cake'};

for (var key in data) {
  var interopKey = '${'+key+'}';
  if (message.includes(interopKey)) {
    message = message.replace(interopKey, data[key]);
  }
}
console.log(message);
/*******************************************/

