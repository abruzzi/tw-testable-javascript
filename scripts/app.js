$(function() {
    var location = $('#location');
    var searchButton = $('#search');

    var searchResults = $('#searchResults ul');
    var liked = $('#liked ul');

    searchButton.on('click', function(e) {
        $.ajax({
            url: 'http://localhost:9292/locations/'+location.val(),
            dataType: 'json',
            success: function(data) {
                searchResults.html('');
                $(data).each(function(index, loc) {
                    var item = $("<li></li>").text(loc.name); 
                    item.on('click', function(e) {
                        var li = $("<li></li>").text(item.text());
                        liked.append(li);
                    });
                    searchResults.append(item);
                });
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
