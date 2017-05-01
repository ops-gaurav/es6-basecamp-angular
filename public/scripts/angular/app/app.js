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