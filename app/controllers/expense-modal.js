var ExpenseModalController = Em.ObjectController.extend({
	members: function (data) {
		return this.store.all('member');
	}.property(),

	actions: {
        close: function(data) {
        	if (data && data.get('id')) {
	        	console.log(data);
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