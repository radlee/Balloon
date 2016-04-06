var sets = "4 sets of red, 3 sets of blue, and 3 sets of yellow";
var prices = "R 4 for red, R5 for blue, and R5.50 for yellow";

var sets = sets.replace(" and","");
var prices = prices.replace(' and','');
// var prices = prices.replace(' R','');

console.log("\n-----------How dafaq do I Remove 'R'-------------")
console.log(sets);
console.log(prices);
console.log("-------------------------------------------------")

var splitString = function(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}

var setsString = splitString(sets, ',');
var pricesString = splitString(prices, ',');


//sets
var setsArr = [];
for(var i =0; i< setsString.length; i++){
	var set = setsString[i].split('sets of')
	setsArr.push(set)
}
console.log(setsArr);

//Remove all R's from prices-------------
var pricesArr = []
pricesString.forEach(function(item){
	pricesArr.push(item.replace(/R/g, ""));
})

var n = [];
for(var i =0; i < pricesArr.length; i++){
	var str = pricesArr[i].split(' for');
	n.push(str);
}
console.log(n)

//Making Prices Object----

var pricesObj = {};
n.forEach(function(item){
	var price = Number(item[0]);
	var color = item[1];
	pricesObj[price] = color;
})
console.log(pricesObj)

for(var key in pricesObj){
	if(pricesObj.hasOwnProperty(key)){
		console.log(key + " -> " + pricesObj[key]);
	}
}

//Making Sets Object-----------------------

// 1 are colors
// 0 are quants

setsArr.forEach(function(x){
	var setsObj = {};
	var quantity = Number(x[0]) * 3;
	var color =  x[1];
	setsObj[color] = quantity; 
	console.log("\n-------------------------------")
	console.log("We ordered |"+ quantity + "| " + color + " balloons.");
	console.log("-------------------------------")
})


// console.log( "\nThe Objects Added!");
// console.log( setsObj);

// setsP\O
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
