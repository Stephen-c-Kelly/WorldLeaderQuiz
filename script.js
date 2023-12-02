// Constant Variables
console.log('test console log')
// - Variable to track of the state of the board (menu, card, results)
const board = null

// - Variable to track the final number of correct answers
const counter = 0
// - Variable named 'results' to track win/lose. Boolean.  true = win, false = lose.
const results = null

const region = ['Asia', 'Europe', 'North and Central America', 'South America', 'The Middle East and Africa', 'Oceania']


// Cached element references

// - Variable named 'activeRegion' to keep track of the selected region.  when defined, this will call an array like '[region[2]]'.
let activeRegion = [undefined]


//Array named activeStack which will house a set of countries a user will see during the game
const activeStack = []

// - Object named 'activeCountry' which will look in the Array ActiveStack  to select a country and find it in the database.  This will and the wrong choices associated with that country based on the region selected by the user
// 
let activeCountry = {
  country: 'value',
  flag: 'flag emoji',
  leader: 'first last',
  wrongLeader1: 'first last',
  wrongLeader2: 'first last',
  wrongLeader3: 'first last',
// additional key value pairs can be added here to help enable phase 2 functionality such as GDP (to enable game a high gdp or low gdp game mode), svg images of the country, etc. 
}

// - Variable named 'correctChoice' to track the correct choice for the active country
let leader = activeCountry.leader


// Event listeners
const regionEl = document.querySelector('.region-btn');
console.log(regionEl)





// // Step 3 - Initialize the game state and render
const init = () => {
  winner = false
  counter = 0
  results = null
  render(menu)
}



// // Step 4 - The state of the menu should be rendered to the user
// unsure if render needs more...
const render = (state) => {
 board = state
}

const updateMenu = () =>{}




// -- create 'updateMenu' which will display the intro copy and menu, and Play Game button
// **** is this the same as the "set board to menu" step in the init function? ****
// -- create a click event that listens for the user's selection of region and stores the choice
// -- create a click event called play that calls the following functions when the Play Game button is triggered:
// ----activeStack
// ----setChoices
// ----display card detail view

// -- create a function called render
// ----updateMenu
// ----displayCardDetail
// ----resultsDisplay
// **** SK Note - I'm unclear how we prevent this from calling all the game states at once. **** 

// -- create a function called activeStack:
// ---- Build an array of country cards based on the available data, ordered randomly
// ---- sets the first card to activeCountry

// -- create a function called setChoices:
// ---- build array with correct choice and incorrect choices in a randomized order 
// ---- build incorrect choices by selecting 3 random world leaders in the same region

// -- create a function called display card detail view
// ----show active country
// ----display each item in the setChoices array in a button
// ----show next button (inactive)
// ----show close button

// -- create a function called 'close'
// ----set an event listener so that the user is taken back to the main menu on click.
// ----render function

// --create a function called checkCorrect
// ----set an event listener function so that the buttons displaying each choice will change the background color (green for correct, red for incorrect) once the user makes a selection
// ----once button is selected, change the state of all choice buttons to inactive so the user can't make another selection
// ----Next button is set to active state and is now clickable

// create a function called nextCard
// -- set an event listener that triggers the following actions when the Next button is clicked:
// ----set the next country card in activeStack to activeCountry
// ----render function

// create a function called seeResults
// -- if activeStack has no more items, update the Next button copy to say "See Results"
// -- once See Results button is clicked, call render

// create a function called resultsDisplay 
// -- if % of correct answers is above 60%, set winner to true
// -- display message "You win" or "You Lose"
// -- display number and % of correcct answers.
// -- display Play Again button.

// create a playAgain function
// -- click event handler so that, when user clicks Play again button, the function close is triggered.
// -- call init 





















// Assuming countries.json is in the same directory as script.js

// // Function to fetch and parse JSON
// async function fetchCountries() {
//   try {
//     const response = await fetch('countries.json');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching countries:', error);
//   }
// }

// // Example usage
// fetchCountries().then(countries => {
//   // Do something with the countries data
//   console.log(countries);
// });


// // Import the JSON data
// import countriesData from './countries.js';

// // Example usage
// console.log(countriesData);


