module.exports = function(arrayOfSetsObjects, costPerBalloon){
  var costToInlateAllBalloons = 0;
  arrayOfSetsObjects.forEach(function(object){
    costToInlateAllBalloons += object.totalBalloons;
  })
  return "R " + costToInlateAllBalloons.toFixed(2) * costPerBalloon + " Extra";
}
