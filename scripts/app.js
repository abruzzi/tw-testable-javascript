$(function() {
    var model = new LocationModel();
    var searchLocationView = new SearchLocationView(model);

    $("#container").append(searchLocationView.render());
});
