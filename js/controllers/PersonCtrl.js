MyApp.controller("PersonCtrl", [
  "$scope",
  function($scope) {
    var batman = {
      name: "Batman",
      age: 51,
      id: 997
    };

    $scope.person = batman;

  }
]);
