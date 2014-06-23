function SearchLocationLogic(formView, resultView, service) {
    this.launch = function() {
        formView.addSearchHandler(this.updateSearchResults);
    };

    this.updateSearchResults = function() {
        if(formView.getLocation()) {
            service.search(formView.getLocation(), resultView.render, resultView.renderError);
        }
    };
}

