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