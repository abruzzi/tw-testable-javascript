$.fn.pressEnter = function () {
    var e = $.Event("keypress");
    e.keyCode = 13;
    $(this).trigger(e);
};

describe("Search Location", function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'spec/fixtures';
        loadFixtures('index.html');
    });

    describe("type for search", function() {
        it("search Melbourne", function() {
            var searchLocation = new SearchLocation();
            searchLocation.launch();

            var spy = spyOn($, 'ajax');
            $('#location').val("Melbourne").pressEnter();
            $('#search').click();

            expect($.ajax).toHaveBeenCalled();
            expect($.ajax.mostRecentCall.args[0].url).toContain('Melbourne');
        });
    });

    describe("based on search results", function() {

        beforeEach(function() {
            spyOn($, 'ajax').andCallFake(function(opt) {
                opt.success([
                    {name: "Melbourne"},
                    {name: "London"}
                ]);
            });

            var searchLocation = new SearchLocation();
            searchLocation.launch();

            $('#location').val("Melbourne").pressEnter();
            $('#search').click();
        }); 

        it("render items based on search results", function() {
            expect($('#searchResults ul').find('li').length).toEqual(2);
            expect($('#searchResults ul').find('li').get(0)).toContainText('Melbourne');
        });

        it("like items based on search results", function() {
            $('#searchResults ul').find('li').get(0).click();
            expect($('#liked ul').find('li').length).toEqual(1);
            expect($('#liked ul').find('li').get(0)).toContainText('Melbourne');
        });
    });

});
