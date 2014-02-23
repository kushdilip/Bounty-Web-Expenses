App.Router.map(function() {
  this.resource('users', { path: '/' });
  this.resource('users');
  this.resource('expenses', { path: '/' });
  this.resource('expences');
  this.resource('computepayments');
});

App.UsersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  }
});

App.ExpenseRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('expense');
  }
});

