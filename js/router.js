App.Router.map(function() {
    // put your routes here
    this.route('items');

    this.route('item', {
        path: '/item/:item_id'
    });

    this.route('cart');

    this.route('history', function() {
        this.route('details', {
            path: '/details/:details_id'
        });
    });
});
