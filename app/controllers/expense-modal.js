var ExpenseModalController = Em.ObjectController.extend({
	selectedMember: null,
	members: function () {
		return this.store.all('member').content.map(function (m) {
			return {id: m.id, nick: m.get('nick')}
		});
	}.property(),

	actions: {
		changePaidBy: function (context) {
			console.log(context.$('select').val())
			console.log("dude, changePaidBy")
		},
        close: function(data) {
        	if (data && data.get('id')) {
	        	var id = data.get('id')
	        	console.log(data, +data.id);
	        	console.log(this.get('selectedMember'))
        		console.log("expense information edited")
        	}
        	else {
	        	var id = this.store.all('expense').get('length') + 1;
	        	console.log("I'm from add box",id);
        	}

            return this.send('closeModal');
        },
        cancel: function () {
			// console.log(this.getProperties('paidBy').paidBy.id)
        	// this.set('paidById', );
        	return this.send('closeModal', 'expense-modal');
        }
    }
});

export default ExpenseModalController;