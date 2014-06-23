$(function() {
    $.ajax({
        url: 'http://localhost:9292/locations',
        success: function(data) {
            console.log(data);
        },
        error: function(error) {
            console.log(error);
        }
    });
});
