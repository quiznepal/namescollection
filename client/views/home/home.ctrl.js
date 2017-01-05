'use strict';

angular.module('names.quiznepal')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app.home', {
  	url:'/',
  	views: {
  	'container@' : {
  	  	templateUrl: 'views/home/home.tpl.html',
  	  	controller: 'HomeCtrl'
  	  }
  	}
  });
}])

.controller('HomeCtrl', HomeCtrl);
HomeCtrl.$inject = ['$scope', 'datafetchService'];

function HomeCtrl($scope,datafetchService) {
  console.log("reached here");

  var name = {};

  $scope.data = [
  {en : 'yo', np : 'yooo'},
  {en : 'ao', np : 'mooo'},
  {en : 'zo', np : 'zooo'},
  {en : 'xo', np : 'xooo'}
  ];


  $scope.add = function () {
    name.en = $scope.nameInput.en;
    name.np = $scope.nameInput.np;
    
  }

}