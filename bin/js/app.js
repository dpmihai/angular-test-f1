angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/drivers", {templateUrl: "html/drivers.html", controller: "driversController"}).
	when("/drivers/:id", {templateUrl: "html/driver.html", controller: "driverController"}).
	otherwise({redirectTo: '/drivers'});
}]);