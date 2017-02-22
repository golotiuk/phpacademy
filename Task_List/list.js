angular.module("myToDo",[])
.controller("ListCtrl", function ($scope) {
	$scope.items = [];
	if (localStorage.object){
		$scope.items = JSON.parse(localStorage.getItem("object"));
	}
	$scope.addItem = function () {
		$scope.items.push({ text: $scope.itemText, date: $scope.itemDate, done: false });
		$scope.itemText = '';
	};
	$scope.remain = function () {
		var count = $scope.items.length;
		angular.forEach($scope.items, function(item) {
			var sObj = JSON.stringify($scope.items);
			localStorage.setItem("object", sObj);
			count -= item.done;
		});
		return count;
	};
	$scope.delete = function(text) { 
		var index = $scope.items.indexOf(text); 
		$scope.items.splice(index, 1); 
	};
	$scope.edit = function(item) {
		$scope.activeItem = item;
	};
	$scope.update = function(item) {  
		$scope.activeItem = null; 
	};
	$scope.done = false;
	$scope.day = false;
	$scope.week = false;

	$scope.setDone = function(){
		$scope.done = !$scope.done;
	};
	$scope.setDay = function(){
		$scope.day = !$scope.day;
	};
	$scope.setWeek = function(){
		$scope.week = !$scope.week;
	};
	$scope.showDate = function(){
		var now = new Date;
		ddd = now.setDate(now.getDate());
		console.log(ddd, now);
	}
})
.filter("showDone", function () {
	return function (value, boolian) {
		var result = [];
		if(boolian == false) return false;
		value.map(function(item) {
			if(item.done === true) result.push(item);
		})
		return result; 
	};
})
// .filter("", function() {
// 	return function(){
// 		var now = new Date();
// 		// return console.log(now.setDate(now.getDay()));
// 	}
// });