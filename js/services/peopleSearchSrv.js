MyApp.factory("peopleSearchSrv", [
  function() {
    var PEOPLE = [
      {name: "Bob", age: 12, id: 101},
      {name: "Kate", age: 23, id: 102},
      {name: "Ed", age: 34, id: 103},
      {name: "Batman", age: 54, id: 104}
    ];

    return {
      findAll: function() {
        return PEOPLE;
      }
    };
  }
]);
