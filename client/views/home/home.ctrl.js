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

  $scope.sortType = "en";
  $scope.sortReverse = false;

  /*$scope.data = [
  {en : 'yo', np : 'yooo'},
  {en : 'ao', np : 'mooo'},
  {en : 'zo', np : 'zooo'},
  {en : 'xo', np : 'xooo'}
  ];*/

  var promise = datafetchService.names();
  promise.then(function (response) {
    console.log(response);
    $scope.data = response.data;
  })
  .catch(function (error) {
    console.log(error);
  })


  $scope.add = function () {
    name.en = $scope.nameInput.en;
    name.np = $scope.nameInput.np;
    name.sex = $scope.nameInput.sex;
    var promise = datafetchService.postNames(name);
    promise.then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })

    console.log(name);
  }

}