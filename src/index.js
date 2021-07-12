import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
//   const [square, setSquare] = useState({ value: null })

//   return (
//     <button 
//       className="square" 
//       onClick={() => setSquare({value: 'X' })}>
//       {square.value}
//     </button>
//   );
// }


function Board(props){
  // const [squares, setSquares] = useState( {squares: Array(9).fill(null)})
  const [squares, setSquares] = useState({ value: Array(9).fill(null) })
 

  const renderSquare = (i) => {
    return <Square 
      value={squares[i]= squares.value}
      onClick={() =>setSquares({value: "X"})} 
    />;
  }
   const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
