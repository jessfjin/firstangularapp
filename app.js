// first, make a MODULE (not model which is the data)
// MODULE is an angular APP
var app = angular.module('myApp', ["ngRoute"]) 
// [] is for dependencies or other modules you may want to call upon


// fourth, connect this with the routing (that'll disply in the ng view)
app.config(function($routeProvider) {
	$routeProvider	
	.when('/', {
		templateUrl: 'views/home.html'
	})
	.when('/about', {
		templateUrl: 'views/about.html'
	})
	.otherwise ({
		redirectTo: '/'
	})
})

// second, set up a CONTROLLER
app.controller('myCtrl', function($scope) {
	$scope.name = "Jessica 123"
})
// binds the HTML (view) to the JavaScript (controller) -- allows for the 2 way data binding
// this variable is only within the scope of the controller
// if you try to call something outside the scope of the controller, it won't work

// third, add ng app to the HTML
// & then connect it back to the controller 