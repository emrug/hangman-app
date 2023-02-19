import { useSelector } from "react-redux";
import HangMan from './HangMan';
import Word from './Word';
import Letter from './Letter';
import '../stylesheets/MainGame.css';

function MainGame() {
    const word = useSelector((state) => state.gamePlay.word);
    const wordSplit = word.split("");
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // loop through each letter in the current word to guess and return a Word component for each letter
    const wordBlanks = wordSplit.map((letter, index) => (
        <Word letter={letter} key={index}/> 
    ))
    
    // loop through the alphabet, creating a button for each letter for user to use for guessing
    const lettersDisplay = alphabet.map((letter, index) => (
        <Letter letter={letter} key={index} />
    ))

    // return the blank word with any guessed letters than alphabet buttons for guessing, below the
    // word and letters is the hangman image which updates depending on the number of incorrect guesses
    return (
        <div id="mainGame">
            <div className="blankWord">
                <p>Your word to guess is:</p>
                {wordBlanks}
            </div>
            <div className="letterSelection">
                <p>Click a letter to guess if it is the word:</p>
                {lettersDisplay}
            </div>
            <HangMan />
        </div>
    )
}

export default MainGame;