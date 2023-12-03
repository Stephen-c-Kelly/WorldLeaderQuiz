import { TEST_COUNTRIES } from './countries.js'

console.log(TEST_COUNTRIES)

// sample country content with test variables  and functions
const testEls = document.querySelector('.play-btn');
const questionEl = document.querySelector('.country-name')
const answer1El = document.querySelector('#btn1')
const answer2El = document.querySelector('#btn2')
const answer3El = document.querySelector('#btn3')
const answer4El = document.querySelector('#btn4')

const testFlag = TEST_COUNTRIES[0].countryDetails.flag
const testQuestion = TEST_COUNTRIES[0].question;
const testAnswer1 = TEST_COUNTRIES[0].answers[0].text;
const testAnswer2 = TEST_COUNTRIES[0].answers[1].text;
const testAnswer3 = TEST_COUNTRIES[0].answers[2].text;
const testAnswer4 = TEST_COUNTRIES[0].answers[3].text;

const testFunction = () => {
  questionEl.textContent = `${testFlag} ${testQuestion} ${testFlag}`;
  answer1El.textContent = `${testAnswer1}`;
  answer2El.textContent = `${testAnswer2}`;
  answer3El.textContent = `${testAnswer3}`;
  answer4El.textContent = `${testAnswer4}`;

}
testEls.addEventListener('click', testFunction)

// Constant Variables

// - Variable to track of the state of the board (menu, card, results)
let board = null

// - Variable to track the final number of correct answers
const counter = 0
// - Variable named 'winner' to track win/lose. Boolean.  true = win, false = lose.
let winner = false

// - Variable that defines the 6 regions the game will eventually cover
const region = ['Asia', 'Europe', 'North and Central America', 'South America', 'The Middle East and Africa', 'Oceania']

//defines the 3 views of the game
const menu = document.querySelector('.main-menu')
const card = document.querySelector('.card-view')
const results = document.querySelector('.results')


// Cached element references

// - Variable named 'activeRegion' to keep track of the selected region.  when defined, this will call an array like '[region[2]]'.
let activeRegion = []


//Array named activeStack which will house a set of countries a user will see during the game
const activeStack = []

// - Object named 'activeCountry' which will look in the Array ActiveStack  to select a country and find it in the database.  This will and the wrong choices associated with that country based on the region selected by the user
// 
let activeCountry = {}

// additional key value pairs can be added here to help enable phase 2 functionality such as GDP (to enable game a high gdp or low gdp game mode), svg images of the country, etc. 

// - Variable named 'correctChoice' to track the correct choice for the active country

let leader = activeCountry.leader

// Event listeners
const regionEl = document.querySelector('.region-btn');


const hide = (state) => {
  state.style.display = 'none'
}

const render = (state) => {
  state === menu
    ? (hide(card), hide(results))
  : state === card
    ? (hide(menu), hide(results))
    : (hide(menu), hide(card))
}

// // Step 3 - Initialize the game state and render
const init = () => {
  let winner = false
  let counter = 0
  let results = null
  render(menu)
}

init()

const(store region choice)

const showCard = ()
// triggers with a click event on play. click event is already partly written








// // Step 4 - The state of the menu should be rendered to the user


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


