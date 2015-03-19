/**
* dttw.menu Module
*
* Piotr Machowski
*/
angular.module('dttw.menu', [])

.config(['$stateProvider',function($stateProvider) {
	$stateProvider.state('menu', {
      url: '/menu',
      controller: 'MenuCtrl',
      templateUrl: 'src/menu/menu.html'
    });
}])

.controller('MenuCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.onPlayTap = function () {
		//start the game
		$state.go('game');
	};
}]);


var app = angular.module("demo", []);

app.controller("flipperDemo", function($scope) {
	$scope.flipped = false;

	$scope.flip = function() {
		$scope.flipped = !$scope.flipped;
	};
});

app.directive("flipper", function() {
	return {
		restrict: "E",
		template: "<div class='flipper' ng-transclude ng-class='{ flipped: flipped }'></div>",
		transclude: true,
		scope: {
			flipped: "="
		}
	};
});

app.directive("front", function() {
	return {
		restrict: "E",
		template: "<div class='front tile' ng-transclude></div>",
		transclude: true
	};
});

app.directive("back", function() {
	return {
		restrict: "E",
		template: "<div class='back tile' ng-transclude></div>",
		transclude: true
	}
});