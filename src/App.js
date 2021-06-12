import react, {useState, useEffect} from 'react'; //useState, useEffect -> react hooks
import SquareComponent from './SquareComponent';

const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {

  const [gameState, updateGameState] = useState([]);
  const [isX, updateIsX] = useState(false);

  const OnSquareClicked=(index)=> {
    let strings = Array.from(gameState);
    strings[index] = isX ? "X" : "O";
    updateGameState(strings);
    updateIsX(!isX); 
  }

  useEffect(() => {
    const winner = checkWinner();
    if(winner){
      window.confirm(`Wohoo! ${winner} Has Won The Game!` );
      updateGameState(initialState);

    }
  }, [gameState])

  const checkWinner = () =>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }


  return (

    <div className="app-header">

      <p className="heading-text">Tic Tac Toe using React</p>

      <button className="clear-button" onClick={() => updateGameState(initialState)}>CLEAR</button>

      <div className="row jc-center">
        <SquareComponent className= "b-bottom-right" state={gameState[0]} onClick={() => OnSquareClicked(0)}/>
        <SquareComponent className= "b-bottom-right" state={gameState[1]} onClick={() => OnSquareClicked(1)}/>
        <SquareComponent className= "b-bottom" state={gameState[2]} onClick={() => OnSquareClicked(2)}/>
      </div>
      <div className="row jc-center">
        <SquareComponent className= "b-bottom-right" state={gameState[3]} onClick={() => OnSquareClicked(3)}/>
        <SquareComponent className= "b-bottom-right" state={gameState[4]} onClick={() => OnSquareClicked(4)}/>
        <SquareComponent className= "b-bottom" state={gameState[5]} onClick={() => OnSquareClicked(5)}/>
      </div>
      <div className="row jc-center">
        <SquareComponent className= "b-right" state={gameState[6]} onClick={() => OnSquareClicked(6)}/>
        <SquareComponent className= "b-right" state={gameState[7]} onClick={() => OnSquareClicked(7)}/>
        <SquareComponent state={gameState[8]} onClick={() => OnSquareClicked(8)}/>
      </div>

      <footer className="foot">© 2021 Suba Shree V S</footer>

    </div>

  );
}

export default App;
