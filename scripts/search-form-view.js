var SearchForm = Backbone.View.extend({
    initialize: function(model) {
      this.model = model;
    },

    events: {
        'click #search': 'search'
    },

    search: function(e) {
      var self = this;
        var location = $(this.$el).find('#location').val();
        $.ajax({
          url: 'http://locations-backend.herokuapp.com/locations?location=' + location,
          success: function(results) {
            self.model.set('locations', results);
          },
          error: function(error) {
            self.model.set('locations', []);
          }
        });
    },

    render: function() {
        var template = $('#search-form-template').html();
        var compiled = _.template(template);
        var html = compiled(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});
