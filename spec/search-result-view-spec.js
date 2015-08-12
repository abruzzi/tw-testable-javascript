describe("SearchResultView", function() {
  beforeEach(function() {
      jasmine.getFixtures().fixturesPath = 'spec/fixtures';
      loadFixtures('search-result-view.template');
  });

  it("#initialize", function() {
    var model = new Backbone.Model([]);
    var view = new SearchResultView(model);
    expect(view.model).toBe(model);
  });

  describe("#render", function() {
    var locations = [
      {"name": "Melbourne", "description": "Melbourne"}
    ];

    it("#render an empty list", function() {
      var model = new Backbone.Model({"locations": []});
      var view = new SearchResultView(model);

      var html = view.render();
      expect(html.find("h4")).toContainText("Search Results");
      expect(html.find("li").length).toEqual(0);
    });

    it("#render an non empty list", function() {
      var model = new Backbone.Model({"locations": locations});
      var view = new SearchResultView(model);

      var html = view.render();
      expect(html.find("li").length).toEqual(1);

      var first  = html.find("li").first();
      expect(first.find("h4")).toContainText("Melbourne");
    });

  });

});
