describe("like view", function() {
    var ul = $("<ul></ul>");

    it("add new item to like", function() {
        var likeView = new LikeView(ul);

        expect(likeView.render).toBeDefined();

        likeView.render("new item");

        expect($(ul).find("li").get(0)).toContainText("new item");
    });
});
