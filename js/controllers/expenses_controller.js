App.ExpensesController = Ember.ArrayController.extend({
  actions: 
	{
	    	createExpense: function() 	
		{
     
		      var name = this.get('newName');
		      var display_name = this.get('newDisplay_name');
      			var comment = this.get('newComment');
      			if (!name.trim()) { return; }

  		    // Create the new user model
      			var user = this.store.createRecord('expense', 
			{
			        name: name,
			        display_name: display_name,
				comment: comment,
				isSelected: false
			 });

      
      			this.set('newName', '');
	      		this.set('newDisplay_name', '');
      			this.set('newComment', '');

		      // Save the new model
     		 user.save();
    		},
   		deleteExpenses: function () 
		{
    			var usrs = this.filterProperty('isSelected', true);
			for(var i=0;i<usrs.get('length');i++)
			{
				usrs[i].deleteRecord();
				usrs[i].save();
			}
    		}
  	},
   	to_be_deleted: function () 
	{
    		return this.filterProperty('isSelected', true).get('length');
  	}.property('@each.isSelected')
});
