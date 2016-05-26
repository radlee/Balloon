module.exports = function(object_sets, object_prices){
    var obj_sets = {};
    object_sets.forEach(function(object){
      var color = object.color;
      var numberOfSets = object.totalBalloons / 3;
      obj_sets[color] = numberOfSets;
    })
    var obj_prices = {};
    object_prices.forEach(function(object){
      var color = object.color;
      var pricePerSet = object.priceForEachSet;
      obj_prices[color] = pricePerSet;
    })
    var total =0;
    for(var key in obj_sets){
      total += obj_sets[key] * obj_prices[key];
    }
    return "R " + total.toFixed(2);
}
