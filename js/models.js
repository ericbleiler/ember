App.Item = DS.Model.extend({
    name: DS.attr('string'),
    image: DS.attr('string'),
    description: DS.attr('string')
});

App.Cart = DS.Model.extend({
    item: DS.attr()
});

App.History = DS.Model.extend({
    order: DS.attr()
});

App.Item.reopenClass({
    FIXTURES: items
});

App.Cart.FIXTURES = [];

App.History.FIXTURES = [];
