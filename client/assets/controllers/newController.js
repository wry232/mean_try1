app.controller('newController', ['$scope','friendsFactory','$location', function($scope, friendsFactory,$location) {
  console.log("in newController");
  /*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
  */
  $scope.friends = [];
  var index = function(){
    friendsFactory.index(function(returnedData){
      $scope.friends = returnedData;
      console.log($scope.friends);
    });
  };
  index();
  $scope.createUser = function() {
    console.log('Create User Method');
    friendsFactory.create($scope.newFriend, function(data) {
      console.log('back to controller in create')
      $scope.newFriend = {};
      // $scope.users = data;
    })
  }

  $scope.remove = function(id){
    console.log(id);
  }


  $scope.testing = function() {
    $location.url('/');
  }

   $scope.toCreate = function(){
     $location.url('/New');
   }
  /*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the friends when we get back?  We can re-run index.
  */
}]);
