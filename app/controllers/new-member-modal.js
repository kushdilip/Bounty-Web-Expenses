var NewMemberModalController = Em.ObjectController.extend({
	actions: {
        close: function  () {
            return this.send('closeModal');
        }
    }
});

export default NewMemberModalController;