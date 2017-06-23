(function(){
  'use strict';
  
  angular
  .module('app.todo')
  .config(states); 
  
  states.$inject=['$stateProvider'];
  function states($stateProvider){
    $stateProvider
    .state({
      name:'tasks',
      url:'/tasks',
      templateUrl:'todo/template.html',
      controller:'todoCtrl'
    })

    .state({
      name:'home',
      url:'',
      controller:'baseCtrl'
    })

  }
})();
