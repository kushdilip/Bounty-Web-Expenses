var MembersRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('member');
	}
});

export default MembersRoute;