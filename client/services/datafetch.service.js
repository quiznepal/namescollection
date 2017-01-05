(function () {

	angular
	.module('names.quiznepal')
	.service('datafetchService', DatafetchService)

	DatafetchService.$inject = ['$http'];

	function DatafetchService ($http) {
		var service = this;
		var url = "";
		service.names = function () {
			var response = $http({
				method: 'GET',
				url: url+'/api/names'
			});

			return response;
		};

		service.postNames = function (data) {
			var response = $http.post(url+'/api/names', data);

			/*.then(successCallback, errorCallback);*/
			return response;
		}

	}

})()