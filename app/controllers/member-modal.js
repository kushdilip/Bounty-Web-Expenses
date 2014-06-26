var MemberModalController = Em.Controller.extend({
	content: {},
	actions: {
        close: function(data) {
        	if (data && data.get('id')) {
	        	console.log(data);
        		console.log("member information edited")
        	}
        	else {
	        	var member = this.getProperties("name", "nick", "description")
	        	var id = this.store.all('member').get('length') + 1;
	        	console.log("I'm from add box",id, member);
				if (member.name && member.nick) {
					console.log("creating record")
					this.store.createRecord('member', {
						id: id,
						name: member.name,
						nick: member.nick,
						description: member.description ? member.description : ""
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