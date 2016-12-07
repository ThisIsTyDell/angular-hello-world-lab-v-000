function MainController($scope) {
  $scope.name = "TyDell"
  $scope.email = "fakeemail@gmail.com"
  $scope.phone = "555-555-5555"
}

angular
  .module('app')
  .controller('MainController', MainController)