
import './App.css'
import Cell from './components/Cell'
import { useState, useEffect } from 'react'

function App() {

  const [board, setBoard] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "])
  const [player, setPlayer] = useState("X")
  const [winner, setWinner] = useState(null)
  const [wins, setWins] = useState({ "x": 0, "o": 0, "draw": 0 })

  function flipPlayer() {
    if (player == "X") {
      setPlayer("O")
    }
    else {
      setPlayer("X")
    }
  }

  function handlePlay(index) {
    if (winner != null) {
      alert("Game is Over Please Restart!")
      return;
    }
    if (board[index] == " ") {
      let newBoard = [...board]
      newBoard[index] = player
      setBoard(newBoard)

      flipPlayer()
    }
    else {
      alert("Don't Cheat")
    }

  }

  function checkWins(value) {
    if (board[0] == value && board[1] == value && board[2] == value)
      return true;

    if (board[3] == value && board[4] == value && board[5] == value)
      return true;

    if (board[6] == value && board[7] == value && board[8] == value)
      return true;

    if (board[0] == value && board[3] == value && board[6] == value)
      return true;

    if (board[1] == value && board[4] == value && board[7] == value)
      return true;

    if (board[2] == value && board[5] == value && board[8] == value)
      return true;

    if (board[0] == value && board[4] == value && board[8] == value)
      return true;

    if (board[2] == value && board[4] == value && board[6] == value)
      return true;

    return false;

  }

  useEffect(() => {
    let x = checkWins("X")
    let o = checkWins("O")
    if (x == true) {
      let winscopy = {...wins}
      winscopy.x += 1
      setWinner("X")
      setWins(winscopy)
    }
    else if (o == true) {
      let winscopy = {...wins}
      winscopy.o += 1
      setWinner("O")
      setWins(winscopy)
    }
    else {
      let flag = false;
      for (let item of board) {
        if (item == " ") {
          flag = true;
          break;
        }
      }
      if (flag == false) {
        let winscopy = {...wins}
        winscopy.draw += 1
        setWinner("No one")
        setWins(winscopy)
      }
    }

  }, [board])

  function resetGame() {
    setBoard([" ", " ", " ", " ", " ", " ", " ", " ", " "])
    setPlayer("X")
    setWinner(null)
  }

  useEffect( () => {
    if(wins.o == 0 && wins.x ==0 && wins.draw == 0)
    {

    }
    else
      localStorage.setItem("winsdata", JSON.stringify(wins))
  }, [wins])

  useEffect(() => {
    if(localStorage.getItem("winsdata"))
      {
        let data = localStorage.getItem("winsdata")
        data = JSON.parse(data)
        setWins(data)
      }
  } , [])

  return (
    <div className='text-center mt-5'>
      <p>Tic-Tac-Toe</p>

      <p>Turn : {player}</p>
      {
        winner != null ? <div> <p>Game is Over! {winner} won the Game!</p>
          <button onClick={resetGame} className='btn btn-sm btn-primary mb-2'>Reset Game</button> </div>
          : null
      }

      <div className='main mx-auto'>
        {board.map((item, index) => {
          return <Cell index={index} clickFuntion={handlePlay} value={item} />
        })}
      </div>

      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col">X Wins</th>
            <th scope="col">O Wins</th>
            <th scope="col">Draws</th>
          </tr>
        </thead>
        <tbody>
          <tr>
     
            <td>{wins.x}</td>
            <td>{wins.o}</td>
            <td>{wins.draw}</td>
  
          </tr>
          
        </tbody>
      </table>


    </div>
  )
}

export default App
