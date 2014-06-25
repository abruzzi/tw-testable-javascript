var SearchResultView = Backbone.View.extend({
    initialize: function() {
        this.bind('search:ready', this.render, this);
    },

    render: function(results) {
        var template = $('#search-result-template').html();
        var compiled = _.template(compiled);
        var html = compiled(results);

        this.$el.html(html);

        return this.$el;
    }
});
