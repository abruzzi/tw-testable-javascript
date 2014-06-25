describe("SearchController", function() {
  var scope, q;
  var controllerFactory;
  var mockSerivce = {};

  beforeEach(function() {
      module("SearchApp");

      inject(function($rootScope, $controller, $q) {
          controllerFactory = $controller;
          scope = $rootScope.$new();
          q = $q;
      });
  });

  beforeEach(function() {
      var deferred = q.defer();
      deferred.resolve([]);
        
      mockSerivce.search = jasmine.createSpy('search');
      mockSerivce.search.andReturn(deferred.promise);
  });

  function initController() {
      return controllerFactory('SearchController', {
          $scope: scope,
          SearchService: mockSerivce
      });
  }

  it("should invoke search service", function() {
      initController();
      scope.$digest();

      expect(scope.searchResults.length).toEqual(0);

      scope.location = 'Melbourne';
      scope.doSearch();

      expect(mockSerivce.search).toHaveBeenCalled();
      expect(mockSerivce.search).toHaveBeenCalledWith('Melbourne');
  });

  it("should be able to like item", function() {
      initController();
      scope.$digest();

      expect(scope.liked.length).toEqual(0);

      scope.like("New York City");

      expect(scope.liked.length).toEqual(1);
  });
});
