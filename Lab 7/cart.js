var myapp = angular.module('category', []);
      /*Dependency Injection*/
      myapp.controller('categoryctrl',function($scope,$http)
{
   $http.get('https://lavanyar007.github.io/json/category.json')
   .success(function(response)
{
  $scope.names=response.category;
  $scope.rowlimit=5;
}
);
});