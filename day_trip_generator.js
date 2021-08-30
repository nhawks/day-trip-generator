"use strict"
//* Functions
// Select random index from tripArrays
function generateRandomValue(tripArray) {
  let randomValue = Math.floor(Math.random() * tripArray.length)
  randomValue = tripArray[randomValue]
  // console.log(tripArray, randomValue) // tests output
  return randomValue
}

//Randomly re-select trip value if user inputs yes or no
function reselectRandomValue(randomTripArray) {
  let newRandomValue;
  let userChoice = ""
  for (let i = 0; i < randomTripArray.length; i++) {
    userChoice = prompt(`Are you okay with - ${randomTripArray[i]}? Please enter: Yes or No`).toLowerCase()
    while (userChoice === "no") {
      // re-select a random value from
      newRandomValue = generateRandomValue(randomValues[i])
      userChoice = prompt(`Are you okay with - ${newRandomValue}? Please enter: Yes or No`).toLowerCase()
      randomTripArray[i] = newRandomValue
    }
    userChoice = ""
    newRandomValue = ""
  }
  alert("Congrats! Your trip is complete!")
  return randomTripArray
}

// Confirm trip and log trip plan to console
// [0] - City | [1] - Restaurant | [2] - Transportation | [3] - Entertainment
const tripConfirmed = (finalTripArray) => {
  console.log(`
  Please see your combined trip plan:

  You're going to ${finalTrip[0]}! 
  When you arrive you'll get around by ${finalTrip[2]}
  You'll eat at ${finalTrip[1]}
  Activity for the trip: ${finalTrip[3]}`)
}

//* Arrays (tripArrays)
const tripDestinations = ["New York City, NY", "Los Angeles, CA", "Washington , DC", "Seattle, WA", "Miami, FL"]
const tripRestaurants = ["The Great Steakout", "USA Grill & Bar", "Los Mejores Tacos", "Sato's Hibachi & Sushi", "Piazza Pizza & Pasta"]
const tripTransportation = ["Rental Car", "Walking", "Public Transportation", "Ridesharing App"]
const tripEntertainment = ["Museum", "Tours & Sightseeing", "Shopping", "Concert"]
// randomValues is used to hold the values of the arrays above so the user can randomly re-select another value
const randomValues = [tripDestinations, tripRestaurants, tripTransportation, tripEntertainment]

//* Calling functions
// Generate random trip values by calling generateRandomValue
let randomDestination = generateRandomValue(tripDestinations)
let randomRestaraunts = generateRandomValue(tripRestaurants)
let randomTransportation = generateRandomValue(tripTransportation)
let randomEntertainment = generateRandomValue(tripEntertainment)

// Generated trip variables stored in an array | Used to re-select trip values (randomTripArray)
let randomTrip = [randomDestination, randomRestaraunts, randomTransportation, randomEntertainment]

// Reselect random value based on user input
reselectRandomValue(randomTrip)

//* Trip confirmed
const finalTrip = randomTrip
tripConfirmed(finalTrip)