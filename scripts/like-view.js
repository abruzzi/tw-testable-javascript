function LikeView(container) {
    this.render = function(data) {
        var li = $("<li></li>").text(data);
        $(container).append(li);
    };
}

