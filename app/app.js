import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = false;

var App = Ember.Application.extend({
  modulePrefix: 'bounty-web-expenses', // TODO: loaded via config
  Resolver: Resolver,
  MemberAdapter: DS.FixtureAdapter.extend({}),
  ExpenseAdapter: DS.FixtureAdapter.extend({})
});


loadInitializers(App, 'bounty-web-expenses');

export default App;
