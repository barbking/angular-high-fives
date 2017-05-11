var myApp = angular.module( 'myApp', [] );
// set up a controller (inject $http if using)
myApp.controller( 'HighFiveController', function(GetHits ){
  console.log( 'NG' );
  // variable global to this controller
  var vm = this;
  // array attached to controller (makes it avilable to DOM)
  vm.hits = [];
  // "vm" stands for "view model"
  //  vm.count = 0;
   var setRanNum = GetHits.randomNum(1,10);
   var yourHit = '';
   console.log (setRanNum);
   console.log (yourHit);

   vm.addHit = function(){
     var yourHit = GetHits.randomNum(1,10);
     if (setRanNum === yourHit) {
       vm.description = 'Your Hive Five was right on!!!';
       vm.count = GetHits.counter();
       vm.hitsCounter = GetHits.hitsCounter();
       console.log(vm.description);
     } else {
       vm.description = 'Bad aim, try again!';
       vm.count = GetHits.counter();
       console.log(vm.description);
     }
   };
  //current count
  // vm.count = GetHits.counterGetter();
  //


});
