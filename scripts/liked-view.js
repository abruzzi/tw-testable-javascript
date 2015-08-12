var LikedView = Backbone.View.extend({

    initialize: function(model) {
      this.model = model;
      this.model.bind('change:liked', _.bind(this.render, this));
    },

    render: function() {
        var template = $('#liked-template').html();
        var compiled = _.template(template);
        var html = compiled(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});
