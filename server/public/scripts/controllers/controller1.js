myApp.controller( 'HighFiveController1',['HitsService',function(HitsService){
  console.log( 'NG HFC1' );
  // variable global to this controller
  var vm = this;

   var skill = HitsService.randomNum(4,10);
   var yourHit = '';
   console.log (skill);
   console.log (yourHit);

   vm.char = {
     name: 'Dalai Llama',
     about: 'Loves high-fives, go on, high-five me!  Pleeeease!',
     skill: 'easy',
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKm7jteUC6Uy_BQtQR7WpkHwrTkniRwu5Ngg-aW-2W1lO1kyIDwA'
   };

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
  // vm.count = GetChar1Hits.counterGetter();
  //
}]);
