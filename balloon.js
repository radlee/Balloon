var sets = "4 sets of red, 3 sets of blue, and 3 sets of yellow";
var prices = "R 4 for red, R5 for blue, and R5.50 for yellow";




var sets = sets.replace(" and","")


console.log(sets);

var splitString = function(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}

var setsString = splitString(sets, ',');

var setsArr = [];
for(var i =0; i< setsString.length; i++){
	var set = setsString[i].split('sets of')
	setsArr.push(set)
}
console.log(setsArr);

//Making an Object-----------------------



// 1 are colors
// 0 are quants

var setsObj = {};
setsArr.forEach(function(x){
	
	var quantity = Number(x[0]);
	var color =  x[1];
	setsObj[color] = quantity  * 3; 
})

console.log( "\nThe Objects Added!");
console.log( setsObj);


// for(var i = 0; i < setsArr.length; i++){
// 	var quantity = setsArr[i][0];
// 	var color = setsArr[i][1];

// 	console.log(quantity)
// 	console.log(color)

// 	setsObj[quantity] = color;
// }



//-----------------------------------------

// var pricesArr = []
// pricesString.forEach(function(item){
// 	pricesArr.push(item.replace("for", "")
// 					   .replace("R", "")
// 					   .replace(" and", "")
// 					 );
// })



// console.log("New One" + newOne)

// setsArr.forEach(function(item){
// 	console.log(item);
// })




























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
