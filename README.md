This is a browser app version of the Solitaire game Devils Grip. You can find an overview of the rules here: https://bicyclecards.com/how-to-play/devils-grip/
Produced with a team of four over a week, it will allow you to play the Classic<sup>tm</sup> card game, swapping and stacking cards in the grid and drawing cards from the deck to stack. You can even record your score in a leaderboard!

I took a lot of responsibilty for the front end user interactions - I wrote the code that allows the user to swap or stack a card, as well as the code around drawing cards from the deck and interacting with the talon. I spent a lot of time on adding improvements to our front end code, such as the code that allows the selected card to remain highlighted. I also fixed a lot of the tricky bugs that came up, such as a pernicious crash bug we had difficulty replicating that I eventually tracked down. 

To get it running, after you've got a copy on your system you'll need to do the following in the server folder:

npm install

npm run seeds

npm run server:dev

and then the following in the client folder:

npm install

npm start
