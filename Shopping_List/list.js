function ListCtrl($scope) {
        $scope.items = [{text: 'bla-bla-bla', done: false}];
        if (window.localStorage.text){
                $scope.items = localStorage.text;
                console.log(localStorage.text);
            }
            
        $scope.addItem = function () {
                $scope.items.push({ text: $scope.itemText, done: false });
                localStorage.setItem("text", $scope.itemText);
                localStorage.setItem('done', false);
                $scope.itemText = '';
        };
        $scope.remain = function () {
                var count = $scope.items.length;
                angular.forEach($scope.items, function(item) {
                    count -= item.done;
                });
            return count;
        };
    }
