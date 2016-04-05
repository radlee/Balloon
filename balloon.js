var sets = " 4 sets of red, 3 sets of blue, and 3 sets of yellow";
var prices = "R 4 for red, R5 for blue, and R5.50 for yellow";


var splitString = function(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}

var setsString = splitString(sets, ',');
var pricesString = splitString(prices, ',');

console.log("\n" + setsString);
// console.log(pricesString);

var setsArr = []

for (var i =0; i < setsString.length; i++){
	var set = setsString[i].split( "sets of")

	setsArr.push(set);
}

console.log("The New RRAY " + setsArr)


// var newOne =[];
// setsArr.forEach(function(item){
// 	newOne.push(item.replace("and", ""));
// })

var pricesArr = []
pricesString.forEach(function(item){
	pricesArr.push(item.replace("for", "")
					   .replace("R", "")
					   .replace(" and", "")
					 );
})

// console.log("New One" + newOne)

setsArr.forEach(function(item){
	console.log(item);
})




























// var list = [];
// list.push(setsArr);
// var t =[];


// // var setList =[];
// list.forEach(function(set){
// 	t.push(set);
// 	for(var i =1; i< setsArr.length; i++){
// 		console.log("---" + set[i][1])
// 	}
// })

// console.log("\n----Console Sets!----")
// console.log("-------" + list + "\n");
// // console.log("The Prices : " + pricesArr);
// // console.log("The Arry : "  + setsArr);
