app.controller('AppCtrl', function($scope, $http) {
	$scope.messages = [];
$scope.refresh = function(){
	$http.get("http://localhost:9000/").then(function(data){
			$scope.messages = data.data;

		});
	}

$scope.refresh();

	// $http.post("http://localhost:9000/", text).success(function (message)

	$scope.addMessage = function (){
		var newText = {
			'messageText' : $scope.newtext
		}
		$http.post("http://localhost:9000/", newText).success(function(response){
			$scope.newtext = '';
			$scope.refresh();
			
		});
	}
});