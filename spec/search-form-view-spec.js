describe("SearchFormView", function() {
  beforeEach(function() {
      jasmine.getFixtures().fixturesPath = 'spec/fixtures';
      loadFixtures('search-form-view.template');
  });

  it("#initialize", function() {
    var model = new Backbone.Model([]);
    var view = new SearchForm(model);
    expect(view.model).toBe(model);
  });

  describe("#render", function() {
    it("default form", function() {
      var model = new Backbone.Model({"locations": []});
      var view = new SearchForm(model);

      var html = view.render();
      expect(html.find("input").length).toEqual(2);
    });

    it("perform a search request", function() {
      var model = new Backbone.Model({"locations": []});
      var view = new SearchForm(model);

      var html = view.render();
      spyOn($, 'ajax');

      html.find("#location").val("Melbourne");
      html.find("#search").trigger("click");

      expect($.ajax).toHaveBeenCalled();
      expect($.ajax.mostRecentCall.args[0].url).toContain('Melbourne');
    });

  });


});
