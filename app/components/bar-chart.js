export default Ember.Component.extend({
  tagName: 'svg',
  attributeBindings: 'width height'.w(),
  margin: {top: 20, right: 20, bottom: 30, left: 40},

  w: function(){
    return this.get('width') - this.get('margin.left') - this.get('margin.right');
  }.property('width'),
  
  h: function(){
    return this.get('height') - this.get('margin.top') - this.get('margin.bottom');
  }.property('height'),  
  
  transformG: function(){
    return "translate(" + this.get('margin.left') + "," + this.get('margin.top') + ")";
  }.property(),

  transformX: function(){
    return "translate(0,"+ this.get('h') +")";
  }.property('h'),   
  
  draw: function(){

    var formatPercent = d3.format(".2");
    var width = this.get('w');
    var height = this.get('h');
    var data = this.get('data');
    var svg = d3.select('#'+this.get('elementId'));
    var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);
    var y = d3.scale.linear().range([height, 0]);
    var xAxis = d3.svg.axis().scale(x).orient("bottom");
    var yAxis = d3.svg.axis().scale(y).orient("left").ticks(5).tickFormat(formatPercent);

    var tip = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d) {
      return "<strong>Value:</strong> <span style='color:red'>" + d.ydata + "</span>";
    });

    x.domain(data.map(function(d) { return d.xdata; }));
    y.domain([0, d3.max(data, function(d) { return d.ydata; })]);

    svg.select(".axis.x").call(xAxis);
    svg.select(".axis.y").call(yAxis);

    svg.call(tip);

    svg.select(".rects").selectAll("rect")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.xdata); })
    .attr("width", x.rangeBand())
    .attr("y", function(d) { return y(d.ydata); })
    .attr("height", function(d) { return height - y(d.ydata); })
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);
  },
  
  didInsertElement: function(){
    // console.log(this.get('data'))
    var that = this;
    this.get('data')[0].then(function (expense) {
      var data = expense.content.map(function (e) {
        return {"xdata": e.get('paidBy').get('nick'), "ydata": e.get('amount')};
      });
      var groupByX = _.groupBy(data, 'xdata');
      var aggrData = [];
      console.log(groupByX);

      //agreegating common data
      for(var x_key in groupByX){
        var foo = groupByX[x_key].reduce(function (a, b) {
          return a + +b.ydata;
        }, 0);
        aggrData.push({xdata: x_key, ydata: foo})
      }

      console.log(aggrData)
      data = Ember.A(aggrData);

      that.set('data', data)
      that.draw();
    });
  }
});