var app = angular.module('SearchApp');

app.factory('SearchService', ['$http', '$q', function($http, $q) {
    return {
        getUrl: function(term) {
            var url = 'http://locations-backend.herokuapp.com/locations';

            if(term && term.length > 0) {
                return url + '/' + term;
            } else {
                return url;
            }        
        },

        search: function(term) {
            var deferred = $q.defer();

            $http.get(this.getUrl(term)).success(function(data) {
                deferred.resolve(data); 
            }).error(function(error) {
                deferred.reject("something went wrong");
            });

            return deferred.promise;
        }
    };
}]);

