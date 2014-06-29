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
		},
		{
			id: 3, 
			name: 'Vikas Aryan', 
			nick: 'Vikas', 
			description: 'Embeded Engineer'
		},
		{
			id: 4, 
			name: 'Suraj Ravi', 
			nick: 'Suraj',
			description: 'Wireless Engineer'
		}
	]
});

export default Member;