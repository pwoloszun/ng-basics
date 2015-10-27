MyApp.controller("PeopleListCtrl", [
  "$scope",
  "peopleSearchSrv",
  function($scope, peopleSearchSrv) {
    $scope.people = peopleSearchSrv.findAll();

    $scope.greetWith = function(person) {
      console.log("Hi " + person.name + "!");
    };

    $scope.createNew = function() {
      $scope.people.push({name: "Bob" + Math.random()});
    };
  }
]);
