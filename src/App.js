import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Cell from './Cell.js'

class App extends Component {
  constructor(props) {
    super(props)
    // This is raw data from API. Had to put it on json file to compress it.
    this.state = {
      playing: false,
      difficulty: 0,

      game: {
        id: 1,
        board: [
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ],
        state: 'new',
        mines: 10
      }
    }
  }
  // This event will pull API data /games then respond with the setState of response data. Use the newGame API to request new game.
  newGame = event => {
    console.log(this.state.difficulty)

    //This will call API only when the game is playing: true
    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: this.state.difficulty
      })
      .then(response => {
        this.setState({
          playing: true,
          game: response.data
        })
      })
  }
  //Flagging and checking cells pulling from API. Need id, row, and col. Row and Col are arguments.
  flagCell = (row, col) => {
    //Return nothing if button start new isn't pushed. Will not return API.
    if (!this.state.playing) {
      return
    }
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${
          this.state.game.id
        }/flag`,
        {
          id: this.state.game.id,
          row: row,
          col: col
        }
      )
      .then(response => {
        this.setState({
          game: response.data
        })
      })
  }
  checkCell = (row, col) => {
    //Return nothing if button start new isn't pushed. Will not return API.
    if (!this.state.playing) {
      return
    }
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${
          this.state.game.id
        }/check`,
        {
          id: this.state.game.id,
          row: row,
          col: col
        }
      )
      .then(response => {
        this.setState({
          game: response.data
        })
      })
  }

  // If else statement allowing for either number of game or Start New Game to display.
  headerText = () => {
    if (this.state.playing) {
      if (this.state.game.state === 'won') {
        return 'You Win!'
      }
      if (this.state.game.state === 'lost') {
        return 'Fugu!'
      }
      return `Game #${this.state.game.id}`
    } else {
      return 'Start New Game!!'
    }
  }
  //Display the number of mines left
  minesText = () => {
    if (this.state.playing) {
      return `${this.state.game.mines} mines left`
    } else {
      return ''
      //Also hides number of mines left
    }
  }

  buttonText = () => {
    if (this.state.game.state === 'lost') {
      return '😱'
    } else {
      return '😀'
    }
  }
  //After adding difficulty to raw data state and
  // newGame API setState.
  chooseYourFate = event => {
    this.setState({
      difficulty: parseInt(event.target.value)
    })
  }

  //The .map function that allows all items in the array of rows and
  //cells to change into what the API provides.
  boardRows = () => {
    return this.state.game.board.map((row, rowIndex) => {
      return (
        <tr key={rowIndex}>
          {row.map((spaceValue, index) => {
            return (
              <Cell
                key={index}
                checkCell={this.checkCell}
                flagCell={this.flagCell}
                row={rowIndex}
                col={index}
                value={spaceValue}
              />
            )
          })}
        </tr>
      )
    })
  }
  //This will return the headers at the length of the API provided board size.
  boardSize = () => {
    return this.state.game.board[0].length
  }
  //This renders and displays or returns everything within the main component.
  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              {/* This is a difficulty selector inside the header. The restart button is also here. */}
              <td className="header" colSpan={this.boardSize()}>
                <select
                  value={this.state.difficulty}
                  onChange={this.chooseYourFate}
                >
                  <option value="0">Novice</option>
                  <option value="1">Warrior</option>
                  <option value="2">Master</option>
                </select>
                <button onClick={this.newGame}>{this.buttonText()}</button>
              </td>
            </tr>
            <tr>
              <td className="header not-playing" colSpan={this.boardSize()}>
                {this.headerText()}
              </td>
            </tr>
            {/* Just displays all cells and data via .map function above */}
            {this.boardRows()}
            <tr>
              <td className="header" colSpan={this.boardSize()}>
                {this.minesText()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default App
