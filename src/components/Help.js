import '../stylesheets/Help.css';

// Help component which returns a button labelled help, which users can click on to see instructions on
// how to play.

function Help() {

    return(
        <div id="helpSection">
            <button id="helpButton" type="button" onClick={()=> {document.getElementById("helpText").style.display = "inherit"}}>Help</button>
            <div id="helpText" style={{display: "none"}}>
                <h3>How to play</h3>
                <p>
                    <b>The aim of the game is to guess the unknown word, shown by the blanks above.</b><br/>
                    Guess a letter you think might be in the word by clicking on one of the letters in the alphabet. <br/>
                    If the letter you guessed is in the unknown word then it will appear, if if isn't then you will lose a life <br/>
                    You get ten lives, if you don't get the word before losing all your lives then the stick man gets hung!
                </p>
            </div>
        </div>
    )
}

export default Help;