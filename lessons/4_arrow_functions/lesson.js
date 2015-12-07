// TODO: keep the code working but use arrow functions when you can

'abcd'.split('').forEach(function(letter, i){
  console.log(`${letter}: ${i}`);
});
/*******************************************/


class MusicBeat {
  constructor(bpm, beat) {
    this.bpm = bpm;

    this.playBeat = function() {
      setInterval(function() {
        console.log(beat);
      }, (60 / this.bpm) * 1000);
    };
  }
}

const backgroundTrack = new MusicBeat(80, 'boom boom clack');
/*******************************************/



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





