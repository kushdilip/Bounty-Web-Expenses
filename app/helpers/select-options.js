export default Ember.Handlebars.makeBoundHelper(    
    function(members, selected) {
        // console.log(members.content, selected);
        var ret = "";
        members.content.forEach(function (m) {
            var selectedVal = "";
            var nick = m.get('nick');
            var id = m.get('id');
            if (selected == nick) {
                selectedVal = "selected";
            };
            ret += "<option value=" + id + " " + selectedVal + 
            ">" + 
            nick + "</option>";
        })
        // console.log(ret)
        return  new Handlebars.SafeString(ret);;
    });