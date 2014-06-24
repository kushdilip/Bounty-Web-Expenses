var MemberModalController = Em.ObjectController.extend({
	actions: {
        close: function() {
        	// console.log(model)
            return this.send('closeModal');
        }
    }
});

export default MemberModalController;