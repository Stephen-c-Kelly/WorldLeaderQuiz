# World Leader Quiz

## Project Description 

(USE USERS instead of You'll of they ) 

"World Leaders" is an online quiz game build to help you memorize the names of world leaders and where they INSERT WORD FOR LEAD OR DO BUSINESS.  You will be able to pick a global region like Asia or Europe.  During gameplay, users will see a series of 20 cards (presented individually) representing countries in that region. Below the country title and the official flag, users will see a multiple choice question with 4 options: the name of the correct world leader and 3 other leaders in the region. After you make a selection, you'll see if your choice was correct or incorrect (if incorrect, you'll also see the correct option).  Users win if they are above 70% correct for the region.

The game is not timed; you can take as long as you want to choose your answers.  This game is built in HTML, CSS, and Javascript.

I'd like to leverage an API or a Google Sheet to more easily update the names of the leaders after elections or world events, and include vector outlines of each country.  I'd also like to integrate a 'hard' option with a countdown clock.

## Wire Frames

**Initial Home View**

View of homescreen where users can review instructions, select from 6 regions, and press play.

**Gameplay - Card Detail View**

Country Card centered in the screen containing the following:

- Name of country
- 4 choices in a randomized order:
-- 1 correct option
-- 3 incorrect options (names taken from the list of leader's names in the region)
- Next button (inactive until the user maakes a selection)


Upon making a selection, users will see the correct and incorrect options highlighted in green and red. Users will be able to click the next button to see another card in the stack

**End of Game Detail View**
After all cards have been played, the end of game view is triggered.  

- Final score and a percentage of correct answers
- You win / You lose message.  Above 60% is counted as a win
- Play Again button
  


#### MVP Goals

As a player...
- As a player, I want to be able to select a region of the world to start the game.
- As a player, I want to see a card with the name of a country and 4 options for the name of the world leader.
- As a player, I want to be able to reset the game if I selected the wrong region.
- As a player, I want to be able to make a selection and see if my choice was correcct.
- As a player, I want to see the correcct choice even if my choice was incorrect.
- As a player, I want to see how well I did at the end of the game.
- As a player, I want to reset the game and select another region to play again.
- As a player, I want the UI to be engaging and out of the way so that I enjoy the experience of playing the game.\*\*

#### Stretch Goals

- *Gameplay Card Detail View* - add counter with number of cards remaining (optional).
- I'd like to implement animation to smooth the transition between cards.  
- I'd like to implement animation to make the correct/incorrect options more interesting/delightful.
- I'd like to leverage an API or a Google Sheet to more easily update the names of the leaders after elections.
- I'd like to include vector outlines of each country.
- I'd like to integrate a 'countdown' option with a  countdown clock.
- I'd like to integrate a 'hard' option to make the 3 incorrect choices more difficult (maybe they can be the names of the countrie's former leader, or they can be other notable figures from that country).
- I'd like to include links to YouTube videos showing how to pronounce each leader's name.

#### Pseudo Code




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
