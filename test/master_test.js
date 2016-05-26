var assert = require("assert");
var makeSetsObjects = require("../makeSetsObjects");
var makePricesObjects = require("../makePricesObjects");
var getQuantityOfSets = require('../getQuantityOfSets');
var totalCostOfAllBalloons = require('../totalCostOfAllBalloons');
var costToInflate = require('../costToInflate');
var numberOfPeopleAtTheParty = require('../numberOfPeopleAtTheParty');

var sets = "4 sets of red, 3 sets of blue, and 3 sets of yellow";
var prices = "R 4 for red, R5 for blue, and R5.50 for yellow";

var setsObjects = makeSetsObjects(sets);
var pricesObjects = makePricesObjects(prices)
var arrayOfSetsObjects = makeSetsObjects(sets);

describe("Should Give me an ordered output |-->", function(){
  it("should return a list of strings 'Balloon Quantities' by colors'", function(){
    assert.deepEqual(getQuantityOfSets(setsObjects),
    [ "12 red balloons", "9 blue balloons", "9 yellow balloons" ]);
  });
  it("should return the total cost of all balloons", function(){
    assert.equal(totalCostOfAllBalloons(setsObjects, pricesObjects), "R 47.50");
  });
  it("should return the total cost of inflating all balloons", function(){
    assert.equal(costToInflate(arrayOfSetsObjects, 2), "R 60 Extra");
  });
  it("should determine if people attending the party all get balloons, and  returns extra balloons", function(){
    assert.equal(numberOfPeopleAtTheParty(arrayOfSetsObjects, 25), "true, 5 Extra balloons");
  });
});

//getQuantityOfSets
/*
12 red + 9 blue + 9 yellow = 30 balloons

*/
