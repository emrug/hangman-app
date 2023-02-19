import { useSelector, useDispatch } from "react-redux";
import { guessLetter } from './gamePlay';

// Letter component which is used to create buttons with each letter of alphabet on, uses letter prop
// to check from state if the user has guessed the letter, if not guessed returns button which when 
// clicked runs the guessLetter reducer, otherwise returns same button but when clicked alerts user 
// that they have already guessed it

function Letter(props) {
    const guessed = useSelector(state => (state.gamePlay.letters[props.letter].guessed));
    const dispatch = useDispatch();

    if (guessed === false) {
        return (
            <button className="notGuessed" onClick={(e) => dispatch(guessLetter(e.target.innerText))}>{props.letter}</button>
        )
    } else {
        return (
            <button className="guessed" onClick={() => alert("You have already guessed this letter!")}>{props.letter}</button>
        )
    }
}

export default Letter;