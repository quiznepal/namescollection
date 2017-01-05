'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('names.quiznepal', [
  'ui.router',
  'ngMaterial',
  'ngSanitize',
  
  'names.quiznepal.filterByProperty'

])

.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.hashPrefix('!');

  $stateProvider
    .state('app',{
      url : '',
      views : {
        'header@' : {
          templateUrl : 'components/common/header/header.tpl.html'
        }
      }
    })
    /*.state('app.home',{
      url : '/',
      views : {
        'header@' : {
          templateUrl : 'components/common/header/header.tpl.html'
        }
      }
    })*/
    .state('app.404',{
      url : '/404',
      views : {
        'header@' : {
          templateUrl : 'components/common/header/header.tpl.html'
        }
      }
    });

    $locationProvider.html5Mode(true);


    $urlRouterProvider.otherwise('/404');
}]);

app.filter('capitalize', function() {
  return function(input) {
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
  }
});