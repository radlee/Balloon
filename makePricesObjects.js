module.exports = function(prices){
	var prices = prices.replace(' and','');
	var splitString = function(stringToSplit, separator){
		var arrayOfStrings = stringToSplit.split(separator);
		return arrayOfStrings;
	}
	var arrayOfSets = splitString(prices, ', ');

	var priceString = [];
	arrayOfSets.forEach(function(item){
		priceString.push(item.replace(/R/g, ''));
	})

	var arrayOfPricesObjects = [];
	priceString.forEach(function(priceSets){
		var x = priceSets.split(' for ');
		var result = {
			color : x[1],
			priceForEachSet : Number(x[0]),
			priceSets : priceSets
		}
		arrayOfPricesObjects.push(result);
	})
	return arrayOfPricesObjects;
}
