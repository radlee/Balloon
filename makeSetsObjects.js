module.exports = function(sets){
	var sets = sets.replace(" and","");
	var splitString = function(stringToSplit, separator){
		var arrayOfStrings = stringToSplit.split(separator);
		return arrayOfStrings;
	}
	var setsString = splitString(sets, ', ');
	var arrayOfSetsObjects = [];
	setsString.forEach(function(set){
		var x = set.split(' sets of ');
		var result = {
			color : x[1],
			totalBalloons : Number(x[0]) * 3,
			set : set
		}
		arrayOfSetsObjects.push(result);
	})
	return arrayOfSetsObjects;
}
