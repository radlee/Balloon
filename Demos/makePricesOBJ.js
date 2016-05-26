/* Demo to makePricesObjects */

var prices = "R4 for red, R5 for blue, and R5.50 for yellow";

var prices = prices.replace(' and','');

//Splitting Method
var splitString = function(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}

var arrayOfSets = splitString(prices, ', ');

//sets Object
var priceString = []
arrayOfSets.forEach(function(item){
	priceString.push(item.replace(/R/g, ''));
})

var setsArr = [];
priceString.forEach(function(priceSets){
	var x = priceSets.split(' for ');
	var result = {
		color : x[1],
		priceForEachSet : Number(x[0]),
		priceSets : priceSets
	}
	setsArr.push(result);
})

console.log(setsArr);
