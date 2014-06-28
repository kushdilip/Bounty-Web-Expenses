var ApplicationRoute = Ember.Route.extend({
  actions: {
    openMemberModal: function(modalName, model) {
      this.controllerFor(modalName).set('model', model);
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },
    
    openExpenseModal: function(modalName, model) {
      if (model){
        model.set('paidById', model.get('paidBy').id);
      }
      else {
        model = {amount: 100, date: new Date(), description: "sfs", paidFor: []};
        this.controllerFor(modalName).set('selectedPayer', null);
      }

      this.controllerFor(modalName).set('model', model);

      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },

    closeModal: function(modalName) {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});

export default ApplicationRoute;