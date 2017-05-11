myApp.service('GetHits', function(){

  var counter = 1;
  var hitsCounter = 0;

  this.counter = function (){
    console.log("counter setter running");
    console.log(counter);
    return counter++;
  };

  this.hitsCounter = function (){
    console.log("counter setter running");
    console.log(hitsCounter);
    return hitsCounter++;
  };

  //return random number
  this.randomNum = function randomNum(min, max){
  return Math.floor (Math.random() * (1 + max - min) + min);
};//end rand number

  // return current value of getCounter
  // this.counterGetter = function(){
  //   return counter;
  // };

  // this.counterSetter = function(){
  //   console.log("counter setter running");
  //   counter++;
  // };

  // this.getHits = function(){
  //   console.log( 'in getHits' );
  // };

});
