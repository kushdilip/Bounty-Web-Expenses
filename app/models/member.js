var Member = DS.Model.extend({
	name: DS.attr('string'),
	nick: DS.attr('string'),
	description: DS.attr('string')	
});

Member.reopenClass({
	FIXTURES: [
		{
			id: 1, 
			name: 'Dilip Kushwaha', 
			nick: 'Dilip', 
			description: 'Web Developer'
		},
		{
			id: 2, 
			name: 'Deepak Kushwaha', 
			nick: 'Deepak', 
			description: 'Intern'
		}
	]
});

export default Member;