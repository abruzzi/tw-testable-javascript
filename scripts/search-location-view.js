var SearchLocationView = Backbone.View.extend({
    initialize: function(model) {
      this.model = model;
    },

    render: function() {
      var searchForm = new SearchForm(this.model);
      var searchResultPanel = new SearchResultView(this.model);
      var likedPanel = new LikedView(this.model);

      this.$el.append(searchForm.render());
      this.$el.append(searchResultPanel.render());
      this.$el.append(likedPanel.render());

      return this.$el;
    }
});
