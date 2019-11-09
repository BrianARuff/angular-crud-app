angular.module("MyApp", []).controller("MainCtrl", function($scope) {
  $scope.world = "Brian Ruff";
  $scope.todoList = ["wash clothes", "clean up room"];
  $scope.newItem = document.querySelector("#todo");
  $scope.addTodo = function() {
    $scope.newItem.value ? $scope.todoList.push($scope.newItem.value) : null;
  };
  $scope.removeTodo = function(index) {
    $scope.todoList.splice(index, 1);
  };
  $scope.editTodo = function(index) {
    const currentNode = document.querySelector(`#edit-${index}`);
    const oldNode = document.querySelector(`#li-${index}`);
    currentNode.value ? (oldNode.textContent = currentNode.value) : null;
  };
});
