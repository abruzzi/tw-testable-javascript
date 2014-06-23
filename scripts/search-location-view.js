function SearchLocationView() {
    this.getLocation = function() {
        return $("#location").val();
    };

    this.addSearchHandler = function(callback) {
        $("#search").on('click', callback);
    };
}

