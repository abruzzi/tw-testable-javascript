$(function() {
    var collection = new LocationCollection();

    var searcnForm = new SearchForm({
        collection: collection
    });

    $("#container").append(searcnForm.render());
});
