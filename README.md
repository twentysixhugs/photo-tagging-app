## [Live preview](https://findme-e0ce0.web.app/)

## Description
A user is presented with a detailed picture containing a lot of characters from video games. 
The task is to find the three specified characters on the screen as fast as possible. The faster they are found, the better the result is. Once the game ends, the user is presented with their score and is able to see top player's scores as well.

## Key features
- App's logic is integrated with a backend-as-a-service (BaaS) from Firebase. Any time a user makes a guess by clicking on where they think the character is, the app will calculate their click position that is not relative to the screen size, send it to the backend, and provide feedback on whether or not the guess was right. When all three characters are guessed, the app will save the time user spent on finding them, save their score on the backend, and query the first top 10 scores from there.
- The game can be played both on small and large screens. As mentioned, character coordinates are calculated independent of the screen size.
- Written with TDD approach using React Testing Library.

## Technologies used
- React.js
- TypeScript
- Firebase
- React Firebase hooks
- React Testing Library

### Credits
##### Game image
- Game image provided by [Pierre Roussel](https://www.artstation.com/pierreroussel)
- [Full collection is available here](https://www.artstation.com/artwork/oOVVlJ)
- [You can buy his prints on Etsy shop](https://www.etsy.com/shop/Angerinet)
##### Icons
- Github, LinkedIn icons and <a target="_blank" href="https://icons8.com/icon/K34PJqYqWnDA/where">favicon</a> are from <a target="_blank" href="https://icons8.com">Icons8</a>
