var Expense = DS.Model.extend({
	description: DS.attr('string'),
	date: DS.attr('date'),
	paidBy: DS.belongsTo('member'),
	paidFor: DS.hasMany('member', {async: true}),
	amount: DS.attr()
});

Expense.reopenClass({
	FIXTURES: [
		{id: 1, date: '2014-05-30', description: 'Lunch', paidBy: 1, paidFor: [1, 2], amount: 300},
		{id: 2, date: '2014-06-20', description: 'Dinner', paidBy: 2, paidFor: [1], amount: 400},
		{id: 3, date: '2014-05-02', description: 'Snacks', paidBy: 2, paidFor: [2], amount: 50},
		{id: 4, date: '2014-05-23', description: 'Pastry', paidBy: 1, paidFor: [1], amount: 90}
	]
});

export default Expense;