export default Em.Controller.extend({
	content: {},

	actions: {
		summaryData: function () {
			this.store.find('expense').then(function (expenses) {
				var data = {};

				expenses.content.map(function (e) {
					var foo = {id: e.id, paidBy: e.get('paidBy').get('nick'), amount: e.get('amount')}
				});
				
				console.log("hello expense")
				this.controller.set('summaryData', "SummaryRoute")
			});

		}
	}
});
