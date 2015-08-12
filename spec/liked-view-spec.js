describe("LikedView", function() {
  beforeEach(function() {
      jasmine.getFixtures().fixturesPath = 'spec/fixtures';
      loadFixtures('liked-view.template');
  });

  it("#initialize", function() {
    var model = new Backbone.Model([]);
    var view = new LikedView(model);
    expect(view.model).toBe(model);
  });

  describe("#render", function() {
    var locations = [
      {"name": "Melbourne", "description": "Melbourne"}
    ];

    it("render an empty list", function() {
      var model = new Backbone.Model({"liked": []});
      var view = new LikedView(model);

      var html = view.render();
      expect(html.find("h4")).toContainText("Locations I liked");
      expect(html.find("ul li").length).toEqual(0);
    });

    it("render an non empty list", function() {
      var model = new Backbone.Model({"liked": locations});
      var view = new LikedView(model);

      var html = view.render();
      expect(html.find("h4")).toContainText("Locations I liked");
      expect(html.find("ul li").length).toEqual(1);

      var first = html.find("ul li").first();
      expect(first).toContainText("Melbourne");
    });

  });

});
