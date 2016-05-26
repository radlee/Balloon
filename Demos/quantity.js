
/* Demo to give a list of strings of quantities by colors */


arrayOfSetsObjects = [{ color: 'red', totalBalloons: 12, set: '4 sets of red' },
  { color: 'blue', totalBalloons: 9, set: '3 sets of blue' },
  { color: 'yellow', totalBalloons: 9, set: '3 sets of yellow' }]

var qua = function(arrayOfSetsObjects){
  var arrayOfBallQuas = [];
  arrayOfSetsObjects.forEach(function(object){
    var string = object.totalBalloons + " " + object.color + " balloons";
    arrayOfBallQuas.push(string);
  })
  console.log(arrayOfBallQuas);
}

qua(arrayOfSetsObjects);
