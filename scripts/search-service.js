function SearchService(url) {
    this.search = function(location, successcb, errorcb) {
        $.ajax({
            url: url + location,
            dataType: 'json',
            success: successcb,
            error: errorcb
        });
    };
}

