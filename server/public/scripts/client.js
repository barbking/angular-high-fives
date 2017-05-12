var myApp = angular.module( 'myApp', [] );
// set up a controller (inject $http if using)
myApp.controller( 'HighFiveController', function(GetHits ){
  console.log( 'NG' );
  // variable global to this controller
  var vm = this;
  // array attached to controller (makes it avilable to DOM)
  // vm.hits = [];
  // "vm" stands for "view model"
  //  vm.count = 0;
   var skill = GetHits.randomNum(1,10);
   var yourHit = '';
   console.log (skill);
   console.log (yourHit);

   vm.addHit = function(){
     var yourHit = GetHits.randomNum(1,10);
     vm.count = GetHits.counter();
     console.log('your hit=',yourHit);
     console.log(yourHit);
     if (yourHit === skill) {
       vm.description = 'Your Hive Five was right on!!!';
       vm.hitsCounter = GetHits.hitsCounter();
     } else {
       vm.description = 'Bad aim, try again!';
     }
   };
  //current count
  // vm.count = GetHits.counterGetter();
  //


});
