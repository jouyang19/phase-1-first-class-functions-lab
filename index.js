// Code your solution in this file!
function returnFirstTwoDrivers(randomArray) {
    const newArr = randomArray.slice(0,2);
    return newArr;
}

function returnLastTwoDrivers(randomArray) {
    const newArr = randomArray.slice(-2);
    return newArr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(randomInt) {
    return function(fare) {
        return fare * randomInt;
    }
}

const doubleMultiplier = createFareMultiplier(2);

function fareDoubler(fare) {
    return doubleMultiplier(fare);
}

const tripleMultiplier = createFareMultiplier(3);

function fareTripler(fare) {
    return tripleMultiplier(fare);
}

function selectDifferentDrivers(randomArr, callbackFunction) {
    const newArr = callbackFunction(randomArr);
    return newArr;
}