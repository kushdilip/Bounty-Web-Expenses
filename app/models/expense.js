var Expense = DS.Model.extend({
	description: DS.attr('string'),
	date: DS.attr(),
	paidBy: DS.belongsTo('member'),
	paidFor: DS.hasMany('member', {async: true}),
	amount: DS.attr()
});

Expense.reopenClass({
	FIXTURES: [
		{id: 1, date: new Date(), description: 'Lunch', paidBy: 1, paidFor: [1, 2], amount: 300},
		{id: 2, date: new Date(), description: 'Dinner', paidBy: 2, paidFor: [1], amount: 400},
		{id: 3, date: new Date(), description: 'Snacks', paidBy: 2, paidFor: [2], amount: 50},
		{id: 4, date: new Date(), description: 'Pastry', paidBy: 1, paidFor: [1], amount: 90}
	]
});

export default Expense;