var ModalController = Em.ObjectController.extend({
	actions: {
        close: function  () {
            return this.send('closeModal');
        }
    }
});

export default ModalController;