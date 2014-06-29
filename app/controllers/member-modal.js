var MemberModalController = Em.Controller.extend({
	content: {},
	actions: {
        close: function(data) {
        	if (data && data.get('id')) {
	        	console.log(data);
        		console.log("member information edited")
        	}
        	else {
	        	var name = this.get('model.name');
	        	var nick = this.get('model.nick');
	        	var description = this.get('model.description');
	        	var id = this.store.all('member').get('length') + 1;
				if (name && nick) {
					console.log("creating record")
					this.store.createRecord('member', {
						id: id,
						name: name,
						nick: nick,
						description: description ? description : ""
					});
				};
			}
            return this.send('closeModal');
        },
	    cancel: function () {
	    	return this.send('closeModal')
	    }
    }
});

export default MemberModalController;