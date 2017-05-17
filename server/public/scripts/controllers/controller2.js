myApp.controller('HighFiveController2', ['HitsService', function(HitsService){
  console.log( 'NG HFC2' );
  // variable global to this controller
  var vm = this;

  vm.char = {
    name: 'Bob Cat',
    about: 'Be prepared to jump high to get a hit with me!',
    skill: 'medium',
    image: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F1funny.com%2Fwp-content%2Fuploads%2F2010%2F08%2Fhi-five-cat.jpg&f=1'
  };

   var skill = HitsService.randomNum(1,10);
   var yourHit = '';
   console.log (skill);
   console.log (yourHit);

   vm.count = HitsService.counterValue();
   vm.hitsCounter= HitsService.hitsCounterValue();

   vm.addHit = function(){
     var yourHit = HitsService.randomNum(1,10);
     vm.count = HitsService.counter();
     console.log('your hit=',yourHit);
     console.log(yourHit);
     if (yourHit === skill) {
       vm.description = 'Your Hive Five was right on!!!';
       vm.hitsCounter = HitsService.hitsCounter();
     } else {
       vm.description = 'Bad aim, try again!';
     }
   };
  //current count
  // vm.count = GetHits.counterGetter();
  //
}]);
