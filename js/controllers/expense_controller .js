App.ExpenseController = Ember.ObjectController.extend(
{
	actions: 
	{
	 	editExpense: function() 
		{
     			this.set('isEditing', true);
   		},

   		doneEditingExpense: function() 
		{
		        this.set('isEditing', false);

			if (!Ember.isEmpty(this.get('model.name'))) 
			{
				this.get('model').save();
			}
		},
		removeExpense: function() 
		{
		    var usr = this.get('model');
		    usr.deleteRecord();
 		    usr.save();
  		},
		selectExpense: function(){
    		      var model = this.get('model');
		      var val = !model.get('isSelected');
		      model.set('isSelected', val);
		      model.save();
  		}
	},	
  	isEditing: false,
isSelected: function(key, value){
    		var model = this.get('model');
		return model.get('isSelected');
  	}.property('@each.isSelected')
});
