var SearchResultView = Backbone.View.extend({
    initialize: function(model) {
      this.model = model;
      this.model.bind('change:locations', _.bind(this.render, this));
    },

    events: {
      'click .like': 'like'
    },

    like: function(event) {
      event.preventDefault();

      var name = $(event.currentTarget).parent().find('h4').text();
      var desc = $(event.currentTarget).parent().find('p').text();

      var liked = this.model.get('liked');

      liked.push({
        name: name,
        description: desc
      });

      this.model.set('liked', liked);
      this.model.trigger('change:liked', this.model);
    },

    render: function() {
        var template = $('#search-result-template').html();
        var compiled = _.template(template);
        var html = compiled(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});
