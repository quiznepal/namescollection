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

  $scope.required = true;

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
    name.en = ((typeof $scope.nameInput.en !== 'undefined' || $scope.nameInput.en == '')?$scope.nameInput.en : false);
    name.np = ((typeof $scope.nameInput.np !== 'undefined' || $scope.nameInput.np == '')?$scope.nameInput.np : false);
    name.sex = ((typeof $scope.nameInput.sex !== 'undefined' || $scope.nameInput.sex == '')?$scope.nameInput.sex : false);

    if (!$scope.nameInput.en) { return}
      
    console.log("here it comes");
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