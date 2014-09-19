(function go() {
	var height = 1000, width = 1000,
	canvas = d3.select('svg').attr('width', width).attr('height', height);
	 
	var enteredRect = canvas.selectAll('rect').data([80, 200]).enter();
  var j = -2;
  while( j < 12 ){
  	enteredRect.append('rect')
  	.attr('x', function (d, i) { return (d * j) })
  	.attr('y', function (d, i) { return 200 })
    .attr('width', function(d){ return (d / 2) })
    .attr('height', function(d){ return (d) });
    j++
	}
  
  d3.selectAll('rect')
  .style('fill', function(d, i){
    if( d < 100 ){ return 'red'}
  })
  .sort(function(a,b){return (a - b)})
  
  var repeat = function (){
    d3.selectAll('rect')
    .transition()
    .ease('sin-in-out')
    .duration( 1000 )
    .attr('x', function(d,i){ 
      if( d < 100 ){ return this.x.baseVal.value - d }
      else{ return this.x.baseVal.value + d}
    })
    .transition()
    .ease('sin-in-out')
    .duration(1000)
    .attr('x', function(d,i){ 
      if( d < 100 ){ return this.x.baseVal.value }
      else{ return this.x.baseVal.value }
    }).each("end", repeat);
  }
  repeat();
})()