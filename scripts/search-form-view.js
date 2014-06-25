var SearchForm = Backbone.View.extend({
    events: {
        'click #search': 'search'
    },

    search: function(e) {
        var location = $(this.$el).find('#location').val();
        this.collection.term = location;
        this.collection.fetch({
            success: function(data) {
                console.log(data); 
            }        
        });
    },

    render: function() {
        var template = $('#search-form-template').html();
        var compiled = _.template(template);
        var html = compiled();

        this.$el.html(html);

        return this.$el;
    }
});
