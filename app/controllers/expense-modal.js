var ExpenseModalController = Em.Controller.extend({
	content: {},
	selectedPayer: null,
	
	childList: function () {
		return this.store.find('member');
	}.property('model'),
	
	members: function () {
		return this.store.all('member').content.map(function (m) {
			return {id: m.id, nick: m.get('nick')}
		});
	}.property(),

	actions: {
        close: function(data) {
        	var that = this;
        	if (data && data.get('id')) {
	        	var expense = this.get('model');
				var date = new Date(expense.get('date'));
				expense.set('date', date);

	        	var memberId = this.get('selectedPayer').id;

	        	this.store.find('member', memberId).then(function (m) {
	        		expense.set('paidBy', m);
	        		expense.save();
	        	})

        		console.log("expense information edited")
        	}
        	else {
	        	var id = this.store.all('expense').get('length') + 1;
	        	console.log("I'm from add box",id);
        	}

            return this.send('closeModal');
        },
        cancel: function () {
        	return this.send('closeModal');
        }
    }
});

export default ExpenseModalController;