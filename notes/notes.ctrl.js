(function(){
	'use strict';

	angular
	.module('app.notes')
	.controller('notesCtrl', function($scope){
		$scope.notes = [];
		$scope.addItem = function () {
			$scope.notes.push($scope.addMe);
			$scope.addMe="";	
		} 
		$scope.removeItem = function (x) {
			$scope.notes.splice(x, 1);
		} 
	});
})();
