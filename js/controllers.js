App.ItemController = Ember.ObjectController.extend({
    actions: {
        addToCart: function() {
            var self = this;
            self.store.find('Cart').then(function(cartItems) {
                cartItems = cartItems || [];
                var item = self.get('model');
                var cartItem = {};

                cartItem.id = cartItems.get('length');
                cartItem.item = {
                    id: item.get('id'),
                    name: item.get('name'),
                    image: item.item('image'),
                    description: item.get('description')
                };

                self.store.createRecord('Cart', cartItem);
                self.transitionToRoute('cart');

            });
        }
    }
});

App.CartController = Ember.ObjectController.extend({
    actions: {
        checkout: function() {
            // we get the list of all the itemz in 
            // the current cart and add it as a record 
            // to OrderHistory
            var self = this;

            self.store.find('Cart').then(function(cartItems) {
                var order = [];
                cartItems.forEach(function(cartItem) {
                    var item = cartItem.get('item');
                    order.push({
                        id: cartItem.get('id'),
                        item: {
                            id: item.id,
                            name: item.name,
                            image: item.image,
                            description: item.description
                        }
                    });
                });

                self.store.find('History').then(function(historyItems) {
                    historyItems = historyItems || [];
                    var historyItem = {};
                    historyItem.id = historyItems.get('length');
                    historyItem.order = order;

                    // Add items to order history
                    self.store.createRecord('History', historyItem);
                    self.transitionToRoute('history');

                    // Remove all Items from current cart
                    self.store.unloadAll('Cart');

                });
            });

        }
    }
});
