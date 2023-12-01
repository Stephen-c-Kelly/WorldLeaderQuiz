# World Leader Quiz

## Project Description 

"World Leaders" is an online quiz game built to help you memorize the names of world leaders and where they function. You will be able to pick a global region like Asia or Europe.  During gameplay, you'll see a series of 20 cards (presented individually) representing countries in that region. Below the country title and the official flag, you will see a multiple-choice question with 4 options: the name of the correct world leader and 3 other leaders in the region. After you make a selection, you'll see if your choice was correct or incorrect (if incorrect, you'll also see the correct option).  Users win if they are above 60% correct for the region.

The game is not timed; you can take as long as you want to choose your answers.  This game is built in HTML, CSS, and Javascript.

Developer notes:
I'd like to leverage an API or a Google Sheet to more easily update the names of the leaders after elections or world events, and include vector outlines of each country. Additional stretch goals are below.

## Wire Frames

**Initial Home View**

View of homescreen where users can review instructions, select one option amoung the available regions, and press play.

**Gameplay - Card Detail View**

Country Card centered in the window containing the following:

- Name of country
- 4 choices in a randomized order:
-- 1 correct option
-- 3 incorrect options (names taken from the list of leader's names in the region)
- Next button (inactive until the user makes a selection)


Upon making a selection, users will see the correct and incorrect options highlighted in green and red. Users will be able to click the next button to see another card in the stack

**End of Game Detail View**
After all cards have been played, the end-of-game view is triggered.  

- Number and % of correct answers 
- You win / You lose message.  Above 60% is counted as a win
- Play Again button
  


#### MVP Goals

As a player...
- I want to be able to select a region of the world to start the game.
- I want to see a card with the name of a country and 4 options for the name of the world leader.
- I want to be able to reset the game if I select the wrong region.
- I want to be able to make a selection and see if my choice was correct.
- I want to see the correct choice even if my choice was incorrect.
- I want to see how well I did at the end of the game.
- I want to reset the game and select another region to play again.
- I want the UI to be engaging and out of the way so that I enjoy the experience of playing the game.\*\*

#### Stretch Goals

- *Gameplay Card Detail View* - add a counter with the number of cards completed/remaining.
- I'd like to implement animation to smooth the transition between cards.  
- I'd like to implement animation to make the correct/incorrect options more interesting/delightful.
- I'd like to leverage an API or a Google Sheet to more easily update the names of the leaders after elections.
- I'd like to include vector outlines of each country.
- I'd like to integrate a 'countdown' option with a  countdown clock.
- I'd like to integrate a 'hard' option to make the 3 incorrect choices more difficult (maybe they can be the names of the country's former leader, or they can be other notable figures from that country).
- I'd like to include links to YouTube videos showing how to pronounce each leader's name.

#### Pseudo Code

```
// Step 0 - Data Architecture

- Share format with chatGPT and ask to generate countries with the following fields
-- Country Name
-- Flag emoji
-- Region
-- World Leader

The following fields will be added but left blank for MVP
-- Annual GDP (unused during MVP)
-- Assumed Office Date (unused during MVP)
-- Country Image (vector image of outline)
-- Youtube link to how to prounce name (no idea how to set this up, but maybe I can use Bard to search Youtube)

// Step 1 - Define the required variables used to track the state of the game

- Variable named 'board' to keep track of the state of the board (Menu view, card detail, end of game detail)
- Variable named 'counter' to track final number of correct answers
- Variable named 'results' to track win/lose. 
- Variable named 'country' which will look in the data to build a list of countries based on region used in gameplay

// Step 2 - Cached element references
- Variable named 'activeRegion' to keep track of the selected region
- Variable named 'activeCountry' to keep track of the country on display.
- Variable named 'activeChoices' to display choices for an active country.
- Variable named 'correctChoice' to track the correct choice for the active country

// Step 3 - Initialize the game state and render
- init, which will initialize the game
-- set board to menu
-- set winner to false
-- set counter to 0
-- set results to null
-- trigger render function

// Step 4 - The state of the menu should be rendered to the user
-- create 'render' function (will be defined later)
-- create 'updateMenu' which will display the intro copy and menu, and play game button
*** is this the same as the "set board to menu" step in the init function?
-- create a click event that listens for the user's selection of region and stores the choice
-- create a click event called play that calls the following functions when the Play Game button is triggered:
----activeStack
----setChoices
----display card detail view

-- create a function called activeStack:
---- Build an array of country cards based on the available data, ordered randomly
---- sets the first card to activeCountry

-- create a function called setChoices:
---- build array with correct choice and incorrect choices n a randomized order 
---- build incorrect choices by selecting 3 random world leaders in the same region

-- create a function called display card detail view
----show active country
----display each item in the setChoices array in a button
----show next button (inactive)


--create a function called checkCorrect
----set an event listener function so that the buttons displaying each choice will change background color (green for correct, red for incorrect) once user makes a selection
----once button is selected, change the state of all choice buttons to inactive so the user can't make another selecction
----Next button is set to active state and is now clickable


create a function called nextCard
-- set an event listener that triggers the following actions when the Next button is clicked:
----set the next country card in activeStack to activeCountry
----runs display card detail view


--
-- 

-- create init

  // 4b) Create a function called `updateBoard`.

  // 4c) In the `updateBoard` function, loop over `board` and for each element:
  //     - Use the current index of the iteration to access the corresponding 
  //       square in the `squareEls` node list (array-like structure).
  //     - Style that square however you wish, dependent on the value  
  //       contained in the current cell being iterated over (`-1`, `1`, or
  //       `null`). To keep it simple, start with just putting a letter in 
  //       each square depending on what the the value of each cell is.

  // 4d) Create a function called `updateMessage`
  
  // 4e) In the `updateMessage` function, render a message based on the 
  //     current game state:
  //     - If both `winner` and `tie` have a value of false (meaning the game 
  //       is still in progress), render whose turn it is.
  //     - If `winner` is false, but `tie` is true, render a tie message.
  //     - Otherwise, render a congratulatory message to the player that has 
  //       won.

  // 4f) Invoke both the `updateBoard` and the `updateMessage` functions
  //     inside of your `render` function.

// Step 5 - Define the required constants

  // 5a) In a constant called `winningCombos` define the eight possible winning 
  //     combinations as an array of arrays.


// Step 6 - Handle a player clicking a square with a `handleClick` function

  // 6a) Create a function called `handleClick`. It will have an `evt`
  //     parameter.

  // 6b) Attach an event listener to the game board (you can do this to each
  //     one of the existing `squareEls` with a `forEach` loop OR add a new
  //     cached element reference that will allow you to take advantage of 
  //     event bubbling). On the `'click'` event, it should call the 
  //    `handleClick` function you created in 6a.

  // 6c) Obtain the index of the square that was clicked by "extracting" the 
  //     index from an `id` assigned to the target element in the HTML. Assign 
  //     this to a constant called `sqIdx`.

  // 6d) If the `board` has a value at the `sqIdx`, immediately `return`  
  //     because that square is already taken. Also, if `winner` is `true`
  //     immediately `return` because the game is over.


// Step 6.1 - `placePiece`

  // 6.1a) Create a function named placePiece that accepts an `idx` parameter.

  // 6.1b) Update the `board` array at the `idx` so that it is equal to the 
  //       current value of `turn`.


// 6.2 - `checkForTie`

  // 6.2a) Create a function named `checkForTie`.

  // 6.2b) Check if the `board` array still contains any `null` elements. If
  //       it does, we can leave `tie` as false. Otherwise, set `tie` to true.


// 6.3 - `checkForWinner`

  // 6.3a) Create a function called `checkForWinner`

  // 6.3b) Determine if a player has won using one of the two options below.
  //       Option 1 is a more elegant method that takes advantage of the 
  //       `winningCombos` array you wrote above in step 5. Option 2 might 
  //       be a little simpler to comprehend, but you'll need to write more 
  //       code. This option won't take advantage of the winningCombos array, 
  //       but using it as a reference will help you build a solution.
  //       Ensure you choose only one path.

  //       Option 1) Loop through each of the winning combination arrays 
  //       defined in the `winningCombos` array. Total up the three board 
  //       positions using the three indexes in the current combo. Convert 
  //       the total to an absolute value (convert any negative total to 
  //       positive). If the total equals 3, we have a winner, and can set 
  //       `winner` to true.

  //       Option 2) For each one of the winning combinations you wrote in 
  //       step 5, find the total of each winning combination. Convert the 
  //       total to an absolute value (convert any negative total to 
  //       positive). If the total equals 3, we have a winner, and can set 
  //       `winner` to true.


// 6.4 - `switchPlayerTurn`

  // 6.4a) Create a function called `switchPlayerTurn`.

  // 6.4b) If `winner` is true, return out of the function - we don’t need 
  //       to switch the turn anymore!

  // 6.4c) If `winner` is false, change the turn by multiplying `turn` by 
  //       `-1` (this flips a `1` to `-1`, and vice-versa).


// 6.5 - Tying it all together

  // 6.5a) In our `handleClick` function, call `placePiece`, `checkForTie`, 
  //       `checkForWinner`, and `switchPlayerTurn`. Don’t forget that 
  //       `placePiece` needs `sqIdx` as an argument! 

  // 6.5b) Finally, now that all the state has been updated we need to 
  //       render that updated state to the user by calling the `render` 
  //       function that we wrote earlier.

// Step 7 - Create Reset functionality

  // 7a) Add a reset button to the HTML document.

  // 7b) Store the new reset button element as a cached element reference in
  //     a constant named `resetBtnEl`.

  // 7c) Attach an event listener to the `resetBtnEl`. On the `'click'` event 
  //     it should call the `init` function you created in step 3.
```



#### Timeline - Daily Accountability
Example of a Timeline to keep organized and on task for hitting goals every single day you’re on the sprint for your project.

Create your own table using this markdown table generator website:
https://www.tablesgenerator.com/markdown_tables

Do not neglect to plan, you will thank yourself later for being proactive!
| Day        |   | Task                               | Blockers | Notes/ Thoughts |
|------------|---|------------------------------------|----------|-----------------|
| Thursday   |   | Create and present proposal        |          |                 |
| Friday     |   | Create html, js, css files         |          |                 |
| Saturday   |   | Create basic scaffolding           |          |                 |
| Sunday     |   | Add functionality                  |          |                 |
| Monday     |   | Add styling                        |          |                 |
| Tuesday    |   | Finaliza MVP                       |          |                 |
| Wedenesday |   | Work on stretch goals              |          |                 |
| Thursday   |   | Work on icebox items if applicable |          |                 |
| Friday     |   | Presentation Day!                  |          |                 |
|            |   |                                    |          |                 |
