import './stylesheets/App.css';
import { useSelector, useDispatch } from "react-redux";
import { newGame } from './components/gamePlay';
import MainGame from './components/MainGame';
import Help from './components/Help';

function App() {
  const status = useSelector((state) => state.gamePlay.gameStatus);
  const outcome = useSelector((state) => state.gamePlay.outcome);
  const word = useSelector((state) => state.gamePlay.word);

  const dispatch = useDispatch();

  // checks on the status of game from state, if 'playing' then displays MainGame component
  // and help so user can play, otherwise displays whether user won or lost and what
  // the word was with a button they can click to restart the game

  if (status === "playing") {
    return (
      <div className='App' >
        <h2>Welcome to the hangman game</h2>
        <MainGame />
        <Help />
      </div>
    )
  } else {
    return (
        <div className="App">
          <h2>You {outcome}!</h2>
          <h3>The word was: {word}</h3>
          <button type="button" id="playAgainButton" onClick={()=>dispatch(newGame())}>Play again</button>
        </div>
    );
  }
}

export default App;
