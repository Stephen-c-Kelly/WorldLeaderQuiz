// bug - when you restart game you see the last gameplay's region selection
// task - connect more regions and test (reformat data)
// task - styling
// task - clean up code
// task - optimize code






// phase 2 - add shuffle functionality to the answers

// import { ALL_COUNTRIES } from './countries-v3'

// no longer useing this file - im seeing error when trying to import the countries js "Already included file name '/Users/stephenkelly/code/seb/unit-projects/worldLeaderQuiz/Javascript/countries-v2.js' differs from file name '/Users/stephenkelly/code/seb/unit-projects/worldLeaderQuiz/javascript/countries-v2.js' only in casing.

import { ALL_COUNTRIES } from './countries-v2.js'

console.log(ALL_COUNTRIES)

const playEl = document.querySelector('.play-btn');
const playAgainEl = document.querySelector('.play-again')
const closeBtnEl = document.querySelector('.close-btn')
const questionEl = document.querySelector('.country-name')
const nextEl = document.querySelector(`.next`)
const countCorrectEl = document.querySelector('#count')
const totalCountEl = document.querySelector('#total')
const percentageCorrectEl = document.querySelector('#percentage-correct')
const winLoseEl = document.querySelector('#win-lose')
const regionBtnEls = document.querySelectorAll('.region-btn')
const errorMsgEl = document.querySelector(`.error-message`)

// Constant Variables

// - Variable to track of the state of the board (menu, card, results)
let board = null

// - Variable to track the final number of correct answers
let counter = 0
// - Variable named 'winner' to track win/lose. Boolean.  true = win, false = lose.
let winner = false

// - Variable named 'activeRegion' to keep track of the selected region.  Waiting for user selection
let activeRegion = []
//Array named activeStack which will house a set of countries a user will see during the game.  generated in click region function

let activeStack = []


const clickRegion = (btn) => {
  //should rename clickRegion function.
  //console.log(`start of click region func`)

  regionBtnEls.forEach((el) => {
    el.classList.remove('clicked');
    activeRegion = ['']
    // i tried this but it added one to the active stack activeStack = ['']

    //console.log(`active region reset`)
  });
  btn.classList.add('clicked');
  activeRegion = [btn.textContent];
  console.log(`active region is ${activeRegion}`)
  // console.log(`num questions is ${numQuestions}
  // start buildActiveStreak`)
  errorMsgEl.style.display = 'none'
  buildActiveStack()  
};

//defines the 3 views of the game
const menu = document.querySelector('.main-menu')
const card = document.querySelector('.card-view')
const results = document.querySelector('.results')


// Cached element references

// note if this number is larger than the number of items in the imported region, you are left with an array containing undefined objects.  
const numQuestionMax = 10

let numQuestions = 4
// something like this, in a function.  if (ALL_COUNTRIES.length < numQuestionMax) {return nummQuestions = numQuestionMax} else {return numQuestions = ALL_COUNTRIES.length}

// function to shuffle the array of the imported region.  this works by randomly finding two items in the array, then swapping their position.  Linear complexity.  Taken from Chat GPT.
const shuffleArray = (array) =>{
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
let currentCard = []
let correctChoice = []

const findCorrect = (card) => {
  for (let i = 0; i < card.answers.length; i++){
    if (card.answers[i].isCorrect === true) {
    correctChoice = card.answers[i].text
    }
  }
  console.log(`end of find correct loop, answer: ${correctChoice}`)
  return {correctChoice}
  }

const buildActiveStack = () => {
  //This will iterate up to the length of ALL_COUNTRIES if it's longer than numQuestions, or numQuestions otherwise
  for (let i = 0; i < ( numQuestions
    || ALL_COUNTRIES.length ); i++) {
    if (ALL_COUNTRIES[i].countryDetails.globalRegion === activeRegion[0]) {
    activeStack.push(ALL_COUNTRIES[i]);
    //console.log(`Pushed one item into active stack: ${ALL_COUNTRIES[i].countryDetails.globalRegion}`);
    }
    //console.log(`Active stack after loop is:`, activeStack);
  };
    shuffleArray(activeStack);
    console.log(`Length of active stack after build stack + shuffle function: ${activeStack.length}`);
    numQuestions = activeStack.length

    currentCard = activeStack[0];
    findCorrect(currentCard);
    console.log(`the correct choice is supposed to be ${correctChoice}`);
    return {currentCard, correctChoice }
}

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
  //console.log(activeStack.length, activeStack[0], activeStack[1])
}

const playGame = () => {
  if (activeRegion.length == 0){
    errorMsgEl.style.display = 'block'
  }
  else {
  questionEl.textContent = `${currentCard.countryDetails.flag} ${currentCard.question} ${currentCard.countryDetails.flag}`;
  answer1El.textContent = `${currentCard.answers[0].text}`;
  answer2El.textContent = `${currentCard.answers[1].text}`;
  answer3El.textContent = `${currentCard.answers[2].text}`;
  answer4El.textContent = `${currentCard.answers[3].text}`;
  render(card)
  console.log(`play Game func`)
}
}
const answerBtnEls = document.querySelectorAll('.answers button');
const answer1El = document.querySelector('#btn1')
const answer2El = document.querySelector('#btn2')
const answer3El = document.querySelector('#btn3')
const answer4El = document.querySelector('#btn4')

const rightAnswer = () => {
  counter += 1
  //console.log(`the count is ${counter}`)
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
  console.log(`checking answer, looking at ${selectedAnswer}`)
  //console.log(btn.target.classList)
  if (selectedAnswer === correctChoice) {
    console.log(`CORRECT - the button equals the correct choice: ${correctChoice}`)
    rightAnswer ()
    console.log(counter)
  } else {
    console.log(`WRONG - the button doesn't equal correct choice: ${correctChoice}`)
  }
  changeColor()
  // the line below doesn't work...  probably need to target something more specific.  
  //answerBtnEls.disabled = true
}

//console.log(activeStack.length, activeStack[0], activeStack[1])

const nextQuestion = () => {
  console.log(`current card question is ${currentCard.question} and first answer: ${currentCard.answers[0].text}`)
 activeStack.shift()
 if (activeStack.length == 0) {
  console.log(`stack is empty, go to results`)
  render(results)
}
else {
 currentCard = activeStack[0]
 findCorrect(currentCard)
 //console.log(activeStack[0], activeStack[1])
//  console.log(`length = ${activeStack.length}`)
//   console.log(`the new current question is  ${currentCard.question}`)
console.log(`current card is now ${currentCard.question} and first answer: ${currentCard.answers[0].text}`)
}
console.log(`end of nextQuestion function`)
}
const seeNext = () => {
  colorReset()
  nextQuestion()
  if (activeStack.length == 0) {
    console.log(`stack is empty, go to results`)
    render(results)
    countCorrectEl.innerHTML = counter
    totalCountEl.innerHTML = numQuestions
    percentageCorrectEl.innerHTML = (`${100*(counter/numQuestions)}%`)
    console.log(percentageCorrectEl.innerHTML)
    if (parseInt(percentageCorrectEl.innerHTML) > 60){
      winLoseEl.innerHTML = `You Win!`    }
    else {winLoseEl.innerHTML = `Try Again`}
    }
  else {
  playGame()
  console.log(`this is the count ${counter}`)
  }
}

playEl.addEventListener('click', playGame)
// playAgainEl.addEventListener('click', init )
playAgainEl.addEventListener('click', seeMenu)
closeBtnEl.addEventListener('click', init)
closeBtnEl.addEventListener('click', seeMenu)
nextEl.addEventListener('click', seeNext)


regionBtnEls.forEach((btn) => {
  btn.addEventListener('click', () => clickRegion(btn));
});

answer1El.addEventListener('click', checkAnswer)
answer2El.addEventListener('click', checkAnswer)
answer3El.addEventListener('click', checkAnswer)
answer4El.addEventListener('click', checkAnswer)


