var SummaryRoute = Ember.Route.extend({
	model: function () {
		return [this.store.find('expense'), this.store.find('member')]
	}
});

export default SummaryRoute;