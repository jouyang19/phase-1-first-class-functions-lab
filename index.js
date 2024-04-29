// Code your solution in this file!

// a function that takes in an array and slices and returns the first two array items.
function returnFirstTwoDrivers(randomArray) {
    const newArr = randomArray.slice(0,2);
    return newArr;
}

// a function that takes in an array and slices and returns the last two array items.
function returnLastTwoDrivers(randomArray) {
    const newArr = randomArray.slice(-2);
    return newArr;
}

// a constant with an array of two functions to choose from.
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// creates a fare multiplier with the outer argument accepting the multiplier and the inner function accepting the fare and then multiplying by the assigned multiplier.
function createFareMultiplier(randomInt) {
    return function(fare) {
        return fare * randomInt;
    }
}

// a constant that is ready to take in a fare for the inner function of createFareMultiplier and doubles it.
const doubleMultiplier = createFareMultiplier(2);

// the fareDoubler function takes in a fare and gives it to the const doubleMultiplier and returns the result.
function fareDoubler(fare) {
    return doubleMultiplier(fare);
}

// a constant that is ready to take in a fare for the inner funciton of createFareMultiplier and triples the fare.
const tripleMultiplier = createFareMultiplier(3);

// this function takes in a fare, inputs it to the constant tripleMultiplier that is then passed to the inner function of createFareMultiplier(3)
function fareTripler(fare) {
    return tripleMultiplier(fare);
}

// A function that takes in an array of drivers and the callback function to pass the drivers array into. 
// The callback functions referred to here is returnFirstTwoDrivers() and returnLastTwoDrivers().
function selectDifferentDrivers(drivers, driverSelection) {
    const newDrivers = driverSelection(drivers);
    return newDrivers;
}