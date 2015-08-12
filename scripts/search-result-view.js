var SearchResultView = Backbone.View.extend({
    initialize: function(model) {
      this.model = model;
      this.model.bind('change:locations', _.bind(this.render, this));
    },

    render: function() {
        var template = $('#search-result-template').html();
        var compiled = _.template(template);
        var html = compiled(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});
