describe('Search Service', function() {
    var searchService;
    var httpBackend;

    beforeEach(function() {
        module('SearchApp');

        inject(function(SearchService, $httpBackend) {
            searchService = SearchService;
            httpBackend = $httpBackend;
        });
    });

    it('should send request against to backend', function() {
        var result;
        var expected = [
            {name: "Melbourne"},
            {name: "East Melbourne"}
        ];

        httpBackend.expectGET('http://10.29.2.61:9292/locations/Mel').respond(expected);

        var promise = searchService.search('Mel');
        promise.then(function(data) {
            result = data;
        });

        httpBackend.flush();

        expect(result).toEqual(expected);
    });

    it("should throw error when network expection", function() {
        var result, error;
        httpBackend.expectGET('http://10.29.2.61:9292/locations/Mel').respond(500);

        var promise = searchService.search('Mel');
        promise.then(function(data) {
            result = data;
        }, function(data) {
            error = data;
        });

        httpBackend.flush();

        expect(result).toBeUndefined();
        expect(error).toEqual('something went wrong');
    });
});
