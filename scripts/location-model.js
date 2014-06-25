var LocationCollection = Backbone.Collection.extend({
    url: function() {
        return 'http://locations-backend.herokuapp.com/locations/' + this.term;
    }
});
