var users = angular.module("users", []);

users.controller("mainController", function($scope, $http){
  $http.get("/api/students").success(function(data){
       $scope.todo = data;
	}).error(function(err){
		console.log("erreur: "+ err);
	});
});

users.directive("tableview", function(){
	return {
		restrict: "E",
		scope: {data: '=data'},
		link : function(scope, element){
		    console.log(scope.data);
			/*var table = d3.select(element[0]).append("table")
			var head = Object.keys(scope.data)
			table.append("thead").append("tr").selectAll("th").data(head).enter().append("th").text(d=> d)*/
		}
	}

});
/*
function mainController($scope, $http) {
	$http.get("/api/students").success(function(data){
       $scope.todo = data;
       console.log(data);
	}).error(function(err){
		console.log("erreur: "+ err);
	});
}
$http.get("/api/students").success(function(data){
       $scope.todo = data;
       console.log(data);
	}).error(function(err){
		console.log("erreur: "+ err);
	});

	*/