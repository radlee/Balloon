/*Demo to calculate the total cost of all balloons */

var objsets = [
  { color: 'red', totalBalloons: 12, set: '4 sets of red' },
  { color: 'blue', totalBalloons: 9, set: '3 sets of blue' },
  { color: 'yellow', totalBalloons: 9, set: '3 sets of yellow' } ];

var objprices = [
  { color: 'red', priceForEachSet: 4, priceSets: '4 for red' },
  { color: 'blue', priceForEachSet: 5, priceSets: '5 for blue' },
  { color: 'yellow', priceForEachSet: 5.5, priceSets: '5.50 for yellow' } ];

var getTotal = function(object_sets, object_prices){
    // pricePerSet * numberOfSets (4 * 4 = 16) +( 5 * 3 = 15) + (5.5 * 3 = 16.5)
    var obj_sets = {};
    object_sets.forEach(function(object){
      var color = object.color;
      var numberOfSets = object.totalBalloons / 3;
      obj_sets[color] = numberOfSets;
    })
    console.log(obj_sets);
    var obj_prices = {};
    object_prices.forEach(function(object){
      var color = object.color;
      var pricePerSet = object.priceForEachSet;
      obj_prices[color] = pricePerSet;
    })
    console.log(obj_prices);

    var total =0;
    for(var key in obj_sets){
      total += obj_sets[key] * obj_prices[key];
    }
    console.log(total.toFixed(2));
}
getTotal(objsets, objprices);
