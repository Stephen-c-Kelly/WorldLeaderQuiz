import { ALL_COUNTRIES } from './countries.js'
console.log(ALL_COUNTRIES.length)

// Event listeners
const playEl = document.querySelector('.play-btn');
const playAgainEl = document.querySelector('.play-again')
const closeBtnEl = document.querySelector('.close-btn')
const questionEl = document.querySelector('.country-name')
const nextEl = document.querySelector(`.next`)
const nextBtnEl = document.querySelector(`.next-btn`)
const countCorrectEl = document.querySelector('#count')
const totalCountEl = document.querySelector('#total')
const percentageCorrectEl = document.querySelector('#percentage-correct')
const winLoseEl = document.querySelector('#win-lose')
const regionBtnEls = document.querySelectorAll('.region-btn')
const errorMsgEl = document.querySelector(`.error-message`)
const menu = document.querySelector('.main-menu')
const card = document.querySelector('.card-view')
const results = document.querySelector('.results')


// Constant Variables
let board = null
let counter = 0
let winner = false
let activeRegion = []
let activeStack = []
let currentCard = []
let correctChoice = []
let numQuestions = 6

const clickRegion = (btn) => {
  activeStack = []
  regionBtnEls.forEach((el) => {
    el.classList.remove('clicked')
    activeRegion = []
  })
  btn.classList.add('clicked')
  applyStyles(playEl, customBtnStyles)
  activeRegion = [btn.textContent]
  console.log(`active region is ${activeRegion}`)
  errorMsgEl.style.display = 'none'
  buildActiveStack()  
};

// Fisher-Yates shuffle 
const shuffleArray = (array) =>{
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const findCorrect = (card) => {
  for (let i = 0; i < card.answers.length; i++){
    if (card.answers[i].isCorrect === true) {
    correctChoice = card.answers[i].text
    }
  }
  return {correctChoice}
}

const buildActiveStack = () => {
  activeStack = []
  for (let i = 0; i < ALL_COUNTRIES.length; i++) {
    if (ALL_COUNTRIES[i].countryDetails.globalRegion === activeRegion[0]) {
    activeStack.push(ALL_COUNTRIES[i]);
    console.log(`Pushed one item into active stack: ${ALL_COUNTRIES[i].countryDetails.countryName}`);
    }
  };
  shuffleArray(activeStack);
  activeStack = activeStack.slice(0,numQuestions)
  currentCard = activeStack[0];
  findCorrect(currentCard);
  return {currentCard, correctChoice} 
}

const hide = (state) => { 
  state.style.display = 'none'
}
const show = (state) => { 
  state.style.display = 'grid'
}

const render = (state) => {
  state === menu
  ? (show(menu), hide(card), hide(results))
  : state === card
  ? (show(card), hide(menu), hide(results))
  : state === results
  ? (show(results), hide(card), hide(menu))
  : console.log('render error')
}

const init = () => {
  counter = 0
  activeRegion = []
  activeStack = []
  currentCard = []
  correctChoice = []
}

const seeMenu = () => { 
  render(menu)
  counter = 0
  answerBtnEls.forEach((el) => {
    el.classList.remove('correct')
    el.classList.remove('wrong')
  })
  init()
  colorReset()
  regionBtnEls.forEach((el) => {
    el.classList.remove('clicked');
    activeRegion = []
  });
}

const resetButtons = () => {
}

const playGame = () => {
  if (activeRegion.length == 0){
    errorMsgEl.style.display = 'block'
  } else {
  questionEl.innerHTML = `<span class="country-flag">${currentCard.countryDetails.flag}</span>&nbsp;  ${currentCard.question} &nbsp; <span class="country-flag">${currentCard.countryDetails.flag}</span>`;
  answer1El.textContent = `${currentCard.answers[0].text}`;
  answer2El.textContent = `${currentCard.answers[1].text}`;
  answer3El.textContent = `${currentCard.answers[2].text}`;
  answer4El.textContent = `${currentCard.answers[3].text}`;
  render(card)
}}
const answerBtnEls = document.querySelectorAll('.answers-grid button');
const answer1El = document.querySelector('#btn1')
const answer2El = document.querySelector('#btn2')
const answer3El = document.querySelector('#btn3')
const answer4El = document.querySelector('#btn4')

const rightAnswer = () => {
  counter += 1
}

const changeColor =() =>{
  answerBtnEls.forEach((answer) => {
    if (answer.innerHTML===correctChoice) {
      answer.classList.add('correct')
    } else {
      answer.classList.add(`wrong`);
    }
  })
  applyStyles(nextBtnEl, customBtnStyles)
}

const colorReset =() => {
  answerBtnEls.forEach((answer) => {
    if (answer.innerHTML===correctChoice) {
      answer.classList.remove('correct')
    } else {
      answer.classList.remove(`wrong`);
    }
  })
} 

const checkAnswer = (btn) => {
  let selectedAnswer = btn.target.innerHTML 
  if (selectedAnswer === correctChoice) {
    rightAnswer ()
    console.log(counter)
  } 
  changeColor()
}

const nextQuestion = () => {
 activeStack.shift()
 if (activeStack.length == 0) {
  render(results)
} else {
 currentCard = activeStack[0]
 findCorrect(currentCard)
} } 
const seeNext = () => {
  colorReset()
  nextQuestion()
  if (activeStack.length == 0) {   
    countCorrectEl.innerHTML = counter
    totalCountEl.innerHTML = numQuestions
    let result = Math.round((counter/numQuestions)*100) 
    percentageCorrectEl.innerHTML = `${result}%`
    if (parseInt(percentageCorrectEl.innerHTML) > 60){
      winLoseEl.innerHTML = `🥳🥳🥳&nbsp;You Win!&nbsp; 🥳🥳🥳`}
    else {winLoseEl.innerHTML = `🌎 Try Again 🌎`}
  } else {
    playGame()
  }
}

playEl.addEventListener('click', playGame)
playAgainEl.addEventListener('click', seeMenu)
closeBtnEl.addEventListener('click', init)
closeBtnEl.addEventListener('click', seeMenu)
nextEl.addEventListener('click', seeNext)
answer1El.addEventListener('click', checkAnswer)
answer2El.addEventListener('click', checkAnswer)
answer3El.addEventListener('click', checkAnswer)
answer4El.addEventListener('click', checkAnswer)
regionBtnEls.forEach((btn) => {
  btn.addEventListener('click', () => clickRegion(btn));
});

function applyStyles(element, styles) {
  for (const [property, value] of Object.entries(styles)) {
    element.style[property] = value;
  }
}
const customBtnStyles = {
  border: '4px solid var(--green-accent3)',
  borderRadius: '10px',
  backgroundColor: 'var(--green-accent3)',
  color: 'var(--greyscale)',
  cursor: 'pointer',
}

init()


