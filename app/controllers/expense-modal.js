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
	        	var date = this.get('model.date');
	        	var amount = this.get('model.amount')
	        	var description = this.get('model.description');
	        	var memberId = this.get('selectedPayer').id;
	        	var paidFor = this.get('model.paidFor');
	        	// console.log("I'm from add box",id,  description, memberId, amount, paidFor);

	        	var expense = this.store.createRecord('expense', {
	        			id: id,
	        			amount: amount,
	        			date: date,
	        			description: description,
	        			paidBy: null,
	        			// paidFor: null
	        		});

	        	this.store.find('member', memberId).then(function (m) {
	        		expense.set('paidBy', m);
	        	});

	        	expense.get('paidFor').then(function (selectedPaidFor) {
	        		paidFor.forEach(function (pf) {
	        			console.log(pf.id)
	        			that.store.find('member', pf.id).then(function (m) {
	        				selectedPaidFor.addObject(m);
	        				// expense.set('paidFor', selectedPaidFor);
	        				expense.save();
	        			});
	        		});
	        	});
				

        	}

            return this.send('closeModal');
        },
        cancel: function () {
        	return this.send('closeModal');
        }
    }
});

export default ExpenseModalController;