myApp.controller( 'HighFiveController3', ['HitsService',function(HitsService){
  console.log( 'NG HFC3' );
  // variable global to this controller
  var vm = this;

  vm.char = {
    name: 'Panda Man',
    about: 'Known to ask for high-fives but very sneaky and difficult to hit.',
    skill: 'hard',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAZGuFBvbM87bxt7oDgxRXahBmaMkvaFtXeMOhoZLePzdNuKl'
  };

   var skill = HitsService.randomNum(6,10);
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
  // vm.count = GetChar3Hits.counterGetter();
  //
}]);
