module.exports = function(arrayOfSetsObjects, numberOfPeople){
  var totalBalloons = 0;
  arrayOfSetsObjects.forEach(function(object){
    totalBalloons += object.totalBalloons;
  });
  var balloonsLeft = totalBalloons - numberOfPeople;
  var trueOrFalse = '';
  if(balloonsLeft > 0){
    trueOrFalse = true;
  }
  else{
    trueOrFalse = false;
  }
  return trueOrFalse + ", " + balloonsLeft + " Extra balloons";
}
