import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BountyWebExpensesENV.locationType
});

Router.map(function() {
	this.resource('members', { path: 'members'});
	this.resource('expenses', { path: 'expenses'});
	this.resource('summary', { path: 'summary'});
});

export default Router;