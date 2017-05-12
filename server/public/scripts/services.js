myApp.service('GetHits', function(){

  var counter = 0;
  var hitsCounter = 0;

  //counter for all attempts
  this.counter = function (){
    console.log("counter running");
    console.log(counter);
    counter++;
    return counter;
  };

  //counter for successfull high fives
  this.hitsCounter = function (){
    console.log("hitsCounter running");
    console.log(hitsCounter);
    hitsCounter++;
    return hitsCounter;
  }; 

  //return random number
  this.randomNum = function randomNum(min, max){
  return Math.floor (Math.random() * (1 + max - min) + min);
};//end rand number

});
