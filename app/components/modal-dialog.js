var ModalDialogComponent = Ember.Component.extend({
    actions: {
	    close: function () {
	        return this.sendAction();
	    }
	}
});

export default ModalDialogComponent;