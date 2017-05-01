(function (){
	angular
		.module ('app')
		.controller ('HomeController', [
			'$scope',
			'$rootScope',
			'appservice',
			homeController
		]);

	function homeController ($scope, $rootScope, appservice) {
		$scope.title = appservice.serviceTest() ;
	}
})();