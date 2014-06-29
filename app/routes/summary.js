var SummaryRoute = Ember.Route.extend({
	model: function () {
		console.log("hello model")
		return [this.store.find('expense'), this.store.find('member')]
	},

	setupController: function (controller, model) {
		this._super(controller, model);
		this.summaryData(controller);
	},

	summaryData: function (controller) {
		var that = this;
		this.store.find('expense').then(function (expenses) {
			var data = {};
			var length_e = expenses.get('length');
			//Adding amount paid
			expenses.content.map(function (e) {
				var foo = {id: e.get('paidBy').id, nick: e.get('paidBy').get('nick'), amount: e.get('amount')}
				// console.log(foo)
				if (data[foo.id]) {
					data[foo.id].amount += foo.amount;
				} else
					data[foo.id] = foo;

				e.get('paidFor').then(function (pf) {
		            var length_p = pf.get('length');
					pf.content.map(function (p) {
						var bar = {id: p.id, nick: p.get('nick'), amount: -e.get('amount')/length_p};
						// console.log(bar)

						if (data[bar.id]) {
							data[bar.id].amount += bar.amount;
						} else
							data[bar.id] = bar;
					});

	                if (!(--length_e)){
	                	var netExpense = [];
						for(var key in data) netExpense.push(data[key]);
						that.controller.set('netExpense', netExpense);
						that.controller.set('summaryData', "SummaryRoute");

						//Net transfer calculation
	                }
				});
			});

		});

	}

});

export default SummaryRoute;