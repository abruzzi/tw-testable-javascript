var app = angular.module('SearchApp');

app.controller('SearchController', 
        ['$scope', 'SearchService', function($scope, SearchService) {
    $scope.location = '';
    $scope.searchResults= [];
    $scope.liked = [];

    $scope.doSearch = function() {
        SearchService.search($scope.location).then(function(results) {
            $scope.searchResults = results;
        });
    };
    
    $scope.like = function(item) {
        $scope.liked.push(item);    
    };
}]);

