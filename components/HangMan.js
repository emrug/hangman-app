import { useSelector } from "react-redux";
import state1 from '../images/state1.GIF';
import state2 from '../images/state2.GIF';
import state3 from '../images/state3.GIF';
import state4 from '../images/state4.GIF';
import state5 from '../images/state5.GIF';
import state6 from '../images/state6.GIF';
import state7 from '../images/state7.GIF';
import state8 from '../images/state8.GIF';
import state9 from '../images/state9.GIF';
import state10 from '../images/state10.gif';
import state11 from '../images/state11.GIF';

// Hangman component which shows hangman image at each different stage dependending
// on the number of incorrect guesses

function Hangman() {
    const incorrectGuesses = useSelector((state) => state.gamePlay.incorrect);

    switch(incorrectGuesses) {
        case 0:
            return <img src={state1} alt="no wrong guesses"/>;
        case 1:
            return <img src={state2} alt="one wrong guesses"/>;
        case 2:
            return <img src={state3} alt="two wrong guesses"/>;
        case 3:
            return <img src={state4} alt="three wrong guesses"/>;
        case 4:
            return <img src={state5} alt="four wrong guesses"/>;
        case 5:
            return <img src={state6} alt="five wrong guesses"/>;
        case 6:
            return <img src={state7} alt="six wrong guesses"/>;
        case 7:
            return <img src={state8} alt="seven wrong guesses"/>;
        case 8:
            return <img src={state9} alt="eight wrong guesses"/>;
        case 9:
            return <img src={state10} alt="nine wrong guesses"/>;
        case 10:
            return <img src={state11} alt="ten wrong guesses"/>;
        default:
            break;
    }
}

export default Hangman;