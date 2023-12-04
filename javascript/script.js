// phase 2 - add shuffle functionality to the answers

import { TEST_COUNTRIES } from './countries.js'

console.log(TEST_COUNTRIES)



const playEl = document.querySelector('.play-btn');
const playAgainEl = document.querySelector('.play-again')
const closeBtnEl = document.querySelector('.close-btn')
const questionEl = document.querySelector('.country-name')


// const testFlag = TEST_COUNTRIES[0].countryDetails.flag
// const testQuestion = TEST_COUNTRIES[0].question;
// const testAnswer1 = TEST_COUNTRIES[0].answers[0].text;
// const testAnswer2 = TEST_COUNTRIES[0].answers[1].text;
// const testAnswer3 = TEST_COUNTRIES[0].answers[2].text;
// const testAnswer4 = TEST_COUNTRIES[0].answers[3].text;

// Constant Variables

// - Variable to track of the state of the board (menu, card, results)
let board = null

// - Variable to track the final number of correct answers
let counter = 0
// - Variable named 'winner' to track win/lose. Boolean.  true = win, false = lose.
let winner = false

// - Variable that defines the 6 regions the game will eventually cover
const region = ['Asia', 'Europe', 'North and Central America', 'South America', 'The Middle East and Africa', 'Oceania']

//defines the 3 views of the game
const menu = document.querySelector('.main-menu')
const card = document.querySelector('.card-view')
const results = document.querySelector('.results')


// Cached element references



// note if this number is larger than the number of items in the imported region, you are left with an array containing undefined objects.  During build it's set to 2.
const numQuestionMax = 10

const numQuestions = 2

// something like this, in a function.  if (TEST_Countries.length < numQuestionMax) {return nummQuestions = numQuestionMax} else {return numQuestions = TEST_Countries.length}

// - Variable named 'activeRegion' to keep track of the selected region.  when defined, this will call an array like '[region[2]]'.
let activeRegion = []

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
    // console.log(`build active stack loop`)
  }
  shuffleArray(activeStack)
  console.log(`build stack + shuffle function`)
}

buildActiveStack()
console.log(`length: ${activeStack.length}`)
console.log(`${activeStack[0].countryDetails.countryName}, ${activeStack[1].countryDetails.countryName}`)

// need to write function that grabs the region based on user click and sets current stack and 


// - Object named 'activeCountry' which will look in the Array ActiveStack  to select a country and find it in the database.  This will and the wrong choices associated with that country based on the region selected by the user
// 
let currentCard = activeStack[0]
//console.log(`current card is ${currentCard.countryDetails.countryName}`)
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
  console.log(`current card is ${currentCard.countryDetails.countryName} and correct choice is ${correctChoice}`)

// Event listeners
const regionEl = document.querySelector('.region-btn');

const hide = (state) => { state.style.display = 'none'}
const show = (state) => { state.style.display = 'block'}

const render = (state) => {
  state === menu
  ? (show(menu), hide(card), hide(results))
  : state === card
  ? (show(card), hide(menu), hide(results))
  : state === results
  ? (show(results), hide(card), hide(menu))
  : console.log('render error, wrong input')
}
// // Step 3 - Initialize the game state and renders the menu
const init = () => {
  let winner = false
  let counter = 0
  let region = null
  console.log(`init func`)
}
init()

const seeMenu = () => { 
  render(menu)
  init()
  colorReset()
  console.log('see menu func')
}

console.log(currentCard.countryDetails.flag)

let currentFlag = currentCard.countryDetails.flag
let currentQuestion = currentCard.question
let currentAnswer1 = currentCard.answers[0].text
let currentAnswer2 = currentCard.answers[1].text
let currentAnswer3 = currentCard.answers[2].text
let currentAnswer4 = currentCard.answers[3].text

console.log(`set current function. current flag: ${currentFlag}`)

const playGame = () => {
  questionEl.textContent = `${currentFlag} ${currentQuestion} ${currentFlag}`;
  answer1El.textContent = `${currentAnswer1}`;
  answer2El.textContent = `${currentAnswer2}`;
  answer3El.textContent = `${currentAnswer3}`;
  answer4El.textContent = `${currentAnswer4}`;
  
  render(card)
  console.log(`play Game func`)
}

const answerBtnEls = document.querySelectorAll('.answers button');
const answer1El = document.querySelector('#btn1')
const answer2El = document.querySelector('#btn2')
const answer3El = document.querySelector('#btn3')
const answer4El = document.querySelector('#btn4')

const rightAnswer = () => {
  counter += 1
  console.log(`the count is ${counter}`)
}

const changeColor =() =>{
  answerBtnEls.forEach((answer) => {
    if (answer.innerHTML===correctChoice) {
      answer.classList.add('correct')
    } else {
      answer.classList.add(`wrong`);
    }
  })
}

const colorReset =() => {
  answerBtnEls.forEach((answer) => {
    if (answer.innerHTML===correctChoice) {
      answer.classList.remove('correct')
    } else {
      answer.classList.remove(`wrong`);
    }
  })
  console.log(`color reset func`)
}

const checkAnswer = (btn) => {
  // let btn1 = document.querySelector('#btn1') - could use to troubleshoot.
  let selectedAnswer = btn.target.innerHTML
  //console.log(btn.target.classList)
  if (selectedAnswer === correctChoice) {
    console.log(`CORRECT - the button equals the correct choice: ${correctChoice}`)
    rightAnswer ()
  } else {
    console.log(`WRONG - the button doesn't equal correct choice: ${correctChoice}`)
  }
  changeColor()
  // the line below doesn't work...  probably need to target something more specific.  
  //answerBtnEls.disabled = true
}

playEl.addEventListener('click', playGame)
playAgainEl.addEventListener('click', init )
playAgainEl.addEventListener('click', seeMenu)
closeBtnEl.addEventListener('click', init)
closeBtnEl.addEventListener('click', seeMenu)
//nextEl.addEventListener('click', nextQuestion)


answer1El.addEventListener('click', checkAnswer)
answer2El.addEventListener('click', checkAnswer)
answer3El.addEventListener('click', checkAnswer)
answer4El.addEventListener('click', checkAnswer)

const nextQuestion = () => {
  console.log(`starting nextQuestion length: ${activeStack.length}`)
  console.log(` current card is ${currentCard.question}, current choice is ${correctChoice}`)
 activeStack.shift()
  console.log(`${activeStack} and length = ${activeStack.length}`)
  render(card)

  colorReset()

  // colorReset()
  // render(menu)
  console.log(`end of nextQuestion function`)
}
  // reset colors
  


console.log(activeStack)

nextQuestion()


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