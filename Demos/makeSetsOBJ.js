var sets = "4 sets of red, 3 sets of blue, and 3 sets of yellow";
var prices = "R 4 for red, R5 for blue, and R5.50 for yellow";

var sets = sets.replace(" and","");
var prices = prices.replace(' and','');

//Splitting Method
var splitString = function(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}

var setsString = splitString(sets, ', ');
var pricesString = splitString(prices, ',');
// console.log(setsString);

//sets Object
var setsArr = [];
setsString.forEach(function(set){
	var x = set.split(' sets of ');
	var result = {
		color : x[1],
		totalBallons : Number(x[0]) * 3,
		set : set
	}
	setsArr.push(result);
})

console.log(setsArr);
