(function(){
	'use strict';

	angular
	.module('app.notes')
	.config(states); 

	states.$inject=['$stateProvider'];
	function states($stateProvider){
		$stateProvider
		.state({
			name:'notes',
			url:'/notes',
			templateUrl:'./notes/template.html',
			controller:'notesCtrl'
		})

	}
})();
