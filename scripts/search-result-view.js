function SearchResultView(container) {
    this.render = function(data) {
        $(container).html('');
        $(data).each(function(index, loc) {
            var li = $("<li></li>").html(loc.name);
            $(container).append(li);
            li.on('click', function(e) {
                var loc = $(e.target).text();
                $(document).trigger('like', [loc]);
            });
        });
    };

    this.renderError = function() {
        $(container).text("something went wrong");
    };
}

