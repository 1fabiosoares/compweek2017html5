angular.module('app', ['ngStorage'])
  .controller('TodoController', function($scope, $localStorage) {
  	$scope.$storage = $localStorage;
    $scope.$storage.todos;
 
    $scope.addTodo = function() {
      $scope.$storage.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.$storage.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.archive = function() {
      var oldTodos = $scope.$storage.todos;
      $scope.$storage.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.$storage.todos.push(todo);
      });
    };
  });