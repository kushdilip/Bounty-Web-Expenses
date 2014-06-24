var IndexRoute = Ember.Route.extend({
	redirect: function () { this.transitionTo('members'); }
});

export default IndexRoute;