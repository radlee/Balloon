var sets = "4 sets of red, 3 sets of blue, and 3 sets of yellow";
var prices = "R 4 for red, R5 for blue, and R5.50 for yellow";

var sets = sets.replace(" and","");
var prices = prices.replace(' and','');

//Splitting Method
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
console.log("Array of Sets")
console.log(setsArr);

//Remove all R's from prices-------------
var pricesArr = []
pricesString.forEach(function(item){
	pricesArr.push(item.replace(/R/g, ""));
})

//Splitting the 'for' and putting them in an array
var priceList = [];
for(var i =0; i < pricesArr.length; i++){
	var str = pricesArr[i].split(' for');
	priceList.push(str);
}
console.log(priceList)

//Making Prices Object----

var pricesObj = {};
priceList.forEach(function(item){
	var price = Number(item[0]);
	var color = item[1];
	//Ther's a situation about putting color and price in the OBJ
	pricesObj[color] = price;
})
//Looping through the 'pricesObj'---
//And getting the prices into a list


var thePrices =[];
var theColors =[];
for(var key in pricesObj){
	if(pricesObj.hasOwnProperty(key)){
		thePrices.push(pricesObj[key])
		theColors.push(key)
		// console.log(key + " -> " + pricesObj[key]);
	}
}



//Making Sets Object-----------------------

var setsObj = {};
setsArr.forEach(function(x){
	var quantity = Number(x[0]);
	var color =  x[1];
	setsObj[color] = quantity;
})

var theQuantities =[];
var theSetColors =[];
for(var key in setsObj){
	if(setsObj.hasOwnProperty(key)){
		theQuantities.push(setsObj[key])
		theSetColors.push(key)
		// console.log(key + " -> " + pricesObj[key]);
	}
}

//Getting the Sum Number of each color balloon

var theTotalList =[]
for(var i =0; i< theQuantities.length; i++){
	var totalPerSet = theQuantities[i] * 3;
	theTotalList.push(totalPerSet)
}


//Getting the cost of each set
var x = []
for(var i =0; i< theQuantities.length; i++){
	var p = theQuantities[i] * thePrices[i];
		x.push(p)
}

//Get the Cost of all The Ballons
var costOfAllBalloons =0;
x.forEach(function(a){
	costOfAllBalloons += a;
})
//Get the Amount of all the Balloons
var numberOfBallons =0;
theTotalList.forEach(function(item){
	numberOfBallons +=item;
})

console.log("\n-------------------------------------------")
// console.log(pricesObj.yellow)
console.log("-------------------------------------------")

//Cost to inflate the Balloons
//R2.00

var costToInflate = (numberOfBallons * 2) + costOfAllBalloons;

//25 People comming to my Party
var numberOfPartyPeople=25;
var balloonsLeft = numberOfBallons - numberOfPartyPeople;

console.log("There will be " + balloonsLeft + " balloons left")

console.log("\nTo inflate " + numberOfBallons + " balloons it will all cost R"+ costToInflate)

console.log("\nThere are in total : " + numberOfBallons + " balloons.");
console.log("The Cost of All Sets is : R" + costOfAllBalloons)
console.log("\nThese are the Cost of sets : " + x)


console.log("Total Number of Balloons in each set : " + theTotalList)

console.log("\n")
console.log("The prices : " + thePrices);
console.log("The colors : " + theColors);

console.log("\n")
console.log("The quantities : " + theQuantities);
console.log("The Set colors : " + theSetColors);

console.log("\n---The Prices Object------------------------")
console.log(pricesObj)
console.log("------------------------------------")
console.log("\n---The Sets Object--------------------------");
console.log(setsObj)
console.log("------------------------------------")


// var x1 = key + key2

// console.log("\n-------------------------------")
// console.log("We ordered |"+ setsObj[quantity] + "| " + color + " balloons.");
// console.log("-------------------------------")
