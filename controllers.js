define("sampleAddonControllers", [ "SHARED/jquery", "SHARED/juzu-ajax" ], function(
    $) {
  var sampleCtrl = function($scope, $q, $timeout, $http, $filter) {
    var sampleContainer = $('#sampleAddon');
    var deferred = $q.defer();

	$scope.firstName="Joe";
	$scope.lastName="Nickel"
  };
  return sampleCtrl;
});