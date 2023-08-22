// Code your solution in this file!
const arrayOfDriverNames = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(arrayOfDriverNames){
   return(arrayOfDriverNames.slice(0,2))
}

returnFirstTwoDrivers(arrayOfDriverNames);

function returnLastTwoDrivers(arrayOfDriverNames){
    return(arrayOfDriverNames.slice(-2,arrayOfDriverNames.length))
}

returnLastTwoDrivers(arrayOfDriverNames);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function (fare){
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)
console.log(fareDoubler(10))

const fareTripler = createFareMultiplier(3)
console.log(fareTripler(10))

function selectDifferentDrivers(arrayOfDriverNames,selectFunction){
    return selectFunction(arrayOfDriverNames)
}

console.log(arrayOfDriverNames, returnFirstTwoDrivers)
console.log(arrayOfDriverNames, returnLastTwoDrivers)