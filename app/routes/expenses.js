var ExpensesRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('expense');
	}
});

export default ExpensesRoute;