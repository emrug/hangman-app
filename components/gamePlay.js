import { createSlice } from "@reduxjs/toolkit";
import wordList from "../dictionary";

// get a random number to use for selecting word for user to guess from the imported word list
let randomNumber = Math.floor(Math.random() * wordList.length)

// initial state has word (which is word to guess), incorrect (for storing number of incorrect guesses),
// correct (for checking number of correct letters), gameStatus (either playing or gameEnd if user has won or lost),
// outcome (stores if user won/lost), letters (letters of the alphabet, each with guessed property for recording if the user has guessed them)
const initialPlayState = {
    word: wordList[randomNumber].toLowerCase(),
    incorrect: 0,
    correct: 0,
    gameStatus: "playing",
    outcome: "",
    letters: {
        a: {guessed: false},
        b: {guessed: false},
        c: {guessed: false},
        d: {guessed: false},
        e: {guessed: false},
        f: {guessed: false},
        g: {guessed: false},
        h: {guessed: false},
        i: {guessed: false},
        j: {guessed: false},
        k: {guessed: false},
        l: {guessed: false},
        m: {guessed: false},
        n: {guessed: false},
        o: {guessed: false},
        p: {guessed: false},
        q: {guessed: false},
        r: {guessed: false},
        s: {guessed: false},
        t: {guessed: false},
        u: {guessed: false},
        v: {guessed: false},
        w: {guessed: false},
        x: {guessed: false},
        y: {guessed: false},
        z: {guessed: false}
    }
}

const gamePlaySlice = createSlice({
    name: "gamePlay",
    initialState: initialPlayState,
    reducers: {
        // guessLetter reducer, action.payload is the guessed letter, changes the
        // property of the letter in the state.letters to true, if incorrect guess then adds one
        // to incorrect guesses and checks if lost game, if correct checks if won game
        guessLetter(state, action) {
            let guess = action.payload;
            state.letters[guess].guessed = true;
            
            if(!state.word.includes(guess)) {
                state.incorrect += 1;

                if(state.incorrect === 10) {
                    state.gameStatus = "gameEnd";
                    state.outcome = "lost";
                }
            } else {
                let correctLetters = 0;

                for(let i = 0; i < state.word.length; i++) {
                    if(state.letters[state.word[i]].guessed === true) {
                        correctLetters += 1;
                    }
                }

                if (correctLetters === state.word.length) {
                    state.gameStatus = "gameEnd";
                    state.outcome = "won"
                }                
            }
           },
        // newGame reducer which is called when user clicks to play again, sets state back
        // to initial values and gets a new word for guessing
        newGame(state) {
            randomNumber = Math.floor(Math.random() * wordList.length);
            state.incorrect = 0;
            state.correct = 0;
            state.outcome = "";
            state.letters = initialPlayState.letters;
            state.word = wordList[randomNumber].toLowerCase();
            state.gameStatus = "playing";
        }
    }
})

export const { guessLetter, newGame } = gamePlaySlice.actions;
export default gamePlaySlice.reducer;