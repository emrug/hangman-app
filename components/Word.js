import { useSelector } from "react-redux";

// Word component used for creating blank word which is then filled in if user guessed correct
// letters. Uses letter prop to check if letter has been guessed from state for the letter, 
// if so returns letter, if not eturns blank space

function Word(props) {
    const letters = useSelector((state) => state.gamePlay.letters);

    if(letters[props.letter].guessed === true) {
        return (
            <p className="guessedLetter">{props.letter}</p>
        )
    } else {
        return (
            <p className="blankLetter">&nbsp;_&nbsp;</p>
        )
    }
}

export default Word;