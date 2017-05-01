(function (){
	angular.module ('app', ['ui.router'])
		.config ([
			'$stateProvider',
			'$urlRouterProvider',
			'$locationProvider',
			configurations
		]);

	function configurations($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
			.state ('home', {
				url: '/',
				views: {
					'': {
						templateUrl: '/partials/home/home.partial.html',
						controller: 'HomeController'
					}
				}
			})

		$urlRouterProvider.otherwise ('/');
	}
})();
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
(function (){
	angular
		.module ('app')
		.factory ('appservice', [appService]);

	function appService() {
		return { 
			serviceTest: function (){
				return 'This is the home page shown using angular routers.';
			}
		 };
	}
})();