// phase 2 - add shuffle functionality to the answers

import { TEST_COUNTRIES } from './countries.js'

//console.log(TEST_COUNTRIES)



const playEl = document.querySelector('.play-btn');
const playAgainEl = document.querySelector('.play-again')
const closeBtnEl = document.querySelector('.close-btn')
const questionEl = document.querySelector('.country-name')


const testFlag = TEST_COUNTRIES[0].countryDetails.flag
const testQuestion = TEST_COUNTRIES[0].question;
const testAnswer1 = TEST_COUNTRIES[0].answers[0].text;
const testAnswer2 = TEST_COUNTRIES[0].answers[1].text;
const testAnswer3 = TEST_COUNTRIES[0].answers[2].text;
const testAnswer4 = TEST_COUNTRIES[0].answers[3].text;

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

// note if this number is larger than the number of items in the imported region, you are left with an array containing undefined objects.  During build it's set to 2.
const numQuestionMax = 10
const numQuestions = 2
// if (TEST_Countries.length < numQuestionMax) {return nummQuestions = numQuestionMax} else {return numQuestions = TEST_Countries.length}


//Array named activeStack which will house a set of countries a user will see during the game
const activeStack = []

// function to shuffle the array of the imported region.  this works by randomly finding two items in the array, then swapping their position.  Linear complexity.  Taken from Chat GPT.

const shuffleArray = (array) =>{
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const buildActiveStack = () => {
  for (let i = 0; i < numQuestions; i++){
    activeStack.push(TEST_COUNTRIES[i])
    // console.log(`build active stack function`)
  }
  shuffleArray(activeStack)
}

buildActiveStack()

console.log(activeStack)


// - Object named 'activeCountry' which will look in the Array ActiveStack  to select a country and find it in the database.  This will and the wrong choices associated with that country based on the region selected by the user
// 
let currentCard = activeStack[0]
let correctChoice = [``]

//console.log(currentCard)
// nested loops in this function.  however each input array will only have 4 choices initially (and it wont ever exceed 10) so the juice is worth the squeeze.

const findCorrect = (card) => {
  for (let i = 0; i < card.answers.length; i++){
    if (card.answers[i].isCorrect === false) {
    //console.log(`loop ${i}: ${card.answers[i].text}`)
    } else if (card.answers[i].isCorrect === true) {
    //console.log(`loop ${i}: ${card.answers[i].text} is correct`)
    return correctChoice = card.answers[i].text
    }
  }
  }

  findCorrect(currentCard)
 // console.log(`checking find correct function - correct - ${correctChoice}`)

// Event listeners
const regionEl = document.querySelector('.region-btn');

const hide = (state) => {
  state.style.display = 'none'
}

const show = (state) => {
  state.style.display = 'block'
}

const render = (state) => {
  state === menu
  ? (show(menu), hide(card), hide(results))
  : state === card
  ? (show(card), hide(menu), hide(results)
    )
  : state === results
  ? (show(results), hide(card), hide(menu))
  : console.log('render function error, wrong paramater input')
}


// // Step 3 - Initialize the game state and renders the menu
const init = () => {
  let winner = false
  let counter = 0
  let region = null
  // card.style.display = 'none'
  // results.style.display = 'none'
  // menu.style.display = 'none'
  console.log(`init trigger`)
}
init()

// play triggers with a click event on play. this reveals the card state and loads in the first question

const playGame = () => {
  questionEl.textContent = `${testFlag} ${testQuestion} ${testFlag}`;
  answer1El.textContent = `${testAnswer1}`;
  answer2El.textContent = `${testAnswer2}`;
  answer3El.textContent = `${testAnswer3}`;
  answer4El.textContent = `${testAnswer4}`;
  
  render(card)
  console.log(`play function trigger`)
}


// here's the problem.  I need to rewrite the play game funciton so it grabs content from the currenyStack i put together



const answer1El = document.querySelector('#btn1')
const answer2El = document.querySelector('#btn2')
const answer3El = document.querySelector('#btn3')
const answer4El = document.querySelector('#btn4')


console.log(testAnswer1)
console.log(answer1El.textContent)
// these should be the same result but they are not.


const seeMenu = () => {
  render(menu)
  console.log('see menu func')
}

// works, changes color to blue answer1El.classList.add(`correct`)

const checkAnswer = (btn) => {
//   let selectedAnswer = btn.textContent
// console.log(`selected answer is ${selectedAnswer} and hopefully it's also ${btn.textContent}`)

//   if (selectedAnswer === correctChoice) {
//     console.log(`the text of the button equals the correct choice, which is ${correctChoice}`)
  }


  // original correcy choice functoin
 //  if (correctChoice === str) {
  //   console.log(`correcct choice is ${correctChoice}, user selected ${str}`)
  //   btn.classList.add('correct')
  //   counter += 1
  //   console.log(`${correctChoice} matches ${str}, yay`)
    
  // } else {
  //   //btn.classList.add('wrong')
  //   console.log(`no match, wrong choice`)
  // }
  // }


//  checkAnswer(answer2El)




playEl.addEventListener('click', playGame)
// to simplified  add render(menu) to init
playAgainEl.addEventListener('click', init )
playAgainEl.addEventListener('click', seeMenu)
closeBtnEl.addEventListener('click', init)
closeBtnEl.addEventListener('click', seeMenu)
//nextEl.addEventListener('click', nextQuestion)

// this workks
// answer1El.classList.add('correct')

answer1El,addEventListener('click', checkAnswer(answer1El, answer1El.textContent))
answer2El,addEventListener('click', checkAnswer(answer2El,  answer2El.textContent))
answer3El,addEventListener('click', checkAnswer(answer3El,  answer3El.textContent))
answer4El,addEventListener('click', checkAnswer(answer4El,  answer4El.textContent))




const nextQuestion = () => {

  // for (let index of TEST_COUNTRIES) {
  //   if (items in active stack of )
  // }
}

const nextBtn = () => {
}

const seeResults = () => {
  render(results)
}
// used to test see resuilts

//seeResults()



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


