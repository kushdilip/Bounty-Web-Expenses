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
						// that.controller.set('summaryData', "SummaryRoute");

						// Net transfer calculation
						{	var transfers = [];
							var posNetExpense = [], negNetExpense = [];
							netExpense.forEach(function (n) {
								if (n.amount > 0) posNetExpense.push(JSON.parse(JSON.stringify(n)));
								else if(n.amount < 0) negNetExpense.push(JSON.parse(JSON.stringify(n)));
							});

							posNetExpense = _.sortBy(posNetExpense, function (n) { return n.amount; });
							negNetExpense = _.sortBy(negNetExpense, function (n) { return -n.amount; });

							var maxCount = 10;
							while (maxCount && posNetExpense.length && negNetExpense.length) {
								var posLast_i = posNetExpense.length;
								var negLast_i = negNetExpense.length;
								var posLast = posNetExpense[posLast_i - 1];
								var negLast = negNetExpense[negLast_i - 1];

								var leftOver = posLast.amount + negLast.amount;
								// console.log(posLast, negLast)
								var transfer = { from: negLast.nick, to: posLast.nick};
								if (leftOver > 0) {
									transfer.amount = -negLast.amount;
									posLast.amount = leftOver;
									negNetExpense.pop();
								} else if(leftOver < 0){
									transfer.amount = posLast.amount;
									negLast.amount = leftOver;
									posNetExpense.pop();
								} else {
									transfer.amount = posLast.amount;
									posNetExpense.pop();
									negNetExpense.pop();
								}
								transfers.push(transfer);
								console.log(transfer, leftOver);
								// maxCount--;
							};
							that.controller.set('transfers', transfers);
						}
	                }
				});
			});

		});

	}

});

export default SummaryRoute;