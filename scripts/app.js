$(function() {
    $.ajax({
        url: 'http://locations-backend.herokuapp.com/locations',
        success: function(data) {
            console.log(data);
        },
        error: function(error) {
            console.log(error);
        }
    });
});
