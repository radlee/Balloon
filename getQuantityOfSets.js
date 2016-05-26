module.exports = function(arrayOfObjects){
  var arrayOfBallQuas = [];
  arrayOfObjects.forEach(function(object){
    var string = object.totalBalloons + " " + object.color + " balloons";
    arrayOfBallQuas.push(string);
  })
  return arrayOfBallQuas;
}
