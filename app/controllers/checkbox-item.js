export default Ember.ObjectController.extend({    
    selected: function() {
        var expense = this.get('content');
        var paidFor = this.get('parentController.elementsOfProperty');
        if (paidFor)
            return paidFor.contains(expense);
        else return false
    }.property(),
    label: function() {    
        return this.get('model.' + this.get('parentController.labelPath'));
    }.property(),
    selectedChanged: function() {
        var expense = this.get('content');
        // if (expense){
            console.log(this.get('parentController'))
            var paidFor = this.get('parentController.elementsOfProperty');
            if (paidFor) {
                if (this.get('selected')) {                                    
                    paidFor.pushObject(expense);         
                } else {                                 
                    paidFor.removeObject(expense);                                                    
                }
            } else{
                console.log(this.get('parentController'));
            }

    }.observes('selected')
});