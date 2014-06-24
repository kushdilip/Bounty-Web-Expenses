var MembersRoute = Ember.Route.extend({
	model: function () {
		console.log(moment())
		return this.store.find('member');
	}
});

export default MembersRoute;