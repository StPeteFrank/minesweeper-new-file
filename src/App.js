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
    axios.post('https://minesweeper-api.herokuapp.com/games').then(response => {
      this.setState({
        playing: true,
        game: response.data
      })
    })
  }
  //id from the
  checkCell = (row, col) => {
    //- POST /games/{id}/check
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
      return `Game #${this.state.game.id}`
    } else {
      return 'Start a new game!'
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

  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              {/* This is a selector inside the header. The restart button is also here. */}
              <td className="header" colSpan="8">
                <select>
                  <option value="0">Novice</option>
                  <option value="1">Warrior</option>
                  <option value="2">Master</option>
                </select>
                <button onClick={this.newGame}>😄</button>
              </td>
            </tr>
            <tr>
              <td className="header not-playing" colSpan="8">
                {this.headerText()}
              </td>
            </tr>
            {/* Rendering cells and passing value for display*/}
            <tr>
              <Cell row={0} col={0} value={this.state.game.board[0][0]} />
              <Cell row={0} col={1} value={this.state.game.board[0][1]} />
              <Cell row={0} col={2} value={this.state.game.board[0][2]} />
              <Cell row={0} col={3} value={this.state.game.board[0][3]} />
              <Cell row={0} col={4} value={this.state.game.board[0][4]} />
              <Cell row={0} col={5} value={this.state.game.board[0][5]} />
              <Cell row={0} col={6} value={this.state.game.board[0][6]} />
              <Cell row={0} col={7} value={this.state.game.board[0][7]} />
            </tr>
            <tr>
              <Cell row={1} col={0} value={this.state.game.board[1][0]} />
              <Cell row={1} col={1} value={this.state.game.board[1][1]} />
              <Cell row={1} col={2} value={this.state.game.board[1][2]} />
              <Cell row={1} col={3} value={this.state.game.board[1][3]} />
              <Cell row={1} col={4} value={this.state.game.board[1][4]} />
              <Cell row={1} col={5} value={this.state.game.board[1][5]} />
              <Cell row={1} col={6} value={this.state.game.board[1][6]} />
              <Cell row={1} col={7} value={this.state.game.board[1][7]} />
            </tr>
            <tr>
              <Cell row={2} col={0} value={this.state.game.board[2][0]} />
              <Cell row={2} col={1} value={this.state.game.board[2][1]} />
              <Cell row={2} col={2} value={this.state.game.board[2][2]} />
              <Cell row={2} col={3} value={this.state.game.board[2][3]} />
              <Cell row={2} col={4} value={this.state.game.board[2][4]} />
              <Cell row={2} col={5} value={this.state.game.board[2][5]} />
              <Cell row={2} col={6} value={this.state.game.board[2][6]} />
              <Cell row={2} col={7} value={this.state.game.board[2][7]} />
            </tr>
            <tr>
              <Cell row={3} col={0} value={this.state.game.board[3][0]} />
              <Cell row={3} col={1} value={this.state.game.board[3][1]} />
              <Cell row={3} col={2} value={this.state.game.board[3][2]} />
              <Cell row={3} col={3} value={this.state.game.board[3][3]} />
              <Cell row={3} col={4} value={this.state.game.board[3][4]} />
              <Cell row={3} col={5} value={this.state.game.board[3][5]} />
              <Cell row={3} col={6} value={this.state.game.board[3][6]} />
              <Cell row={3} col={7} value={this.state.game.board[3][7]} />
            </tr>
            <tr>
              <Cell row={4} col={0} value={this.state.game.board[4][0]} />
              <Cell row={4} col={1} value={this.state.game.board[4][1]} />
              <Cell row={4} col={2} value={this.state.game.board[4][2]} />
              <Cell row={4} col={3} value={this.state.game.board[4][3]} />
              <Cell row={4} col={4} value={this.state.game.board[4][4]} />
              <Cell row={4} col={5} value={this.state.game.board[4][5]} />
              <Cell row={4} col={6} value={this.state.game.board[4][6]} />
              <Cell row={4} col={7} value={this.state.game.board[4][7]} />
            </tr>
            <tr>
              <Cell row={5} col={0} value={this.state.game.board[5][0]} />
              <Cell row={5} col={1} value={this.state.game.board[5][1]} />
              <Cell row={5} col={2} value={this.state.game.board[5][2]} />
              <Cell row={5} col={3} value={this.state.game.board[5][3]} />
              <Cell row={5} col={4} value={this.state.game.board[5][4]} />
              <Cell row={5} col={5} value={this.state.game.board[5][5]} />
              <Cell row={5} col={6} value={this.state.game.board[5][6]} />
              <Cell row={5} col={7} value={this.state.game.board[5][7]} />
            </tr>
            <tr>
              <Cell row={6} col={0} value={this.state.game.board[6][0]} />
              <Cell row={6} col={1} value={this.state.game.board[6][1]} />
              <Cell row={6} col={2} value={this.state.game.board[6][2]} />
              <Cell row={6} col={3} value={this.state.game.board[6][3]} />
              <Cell row={6} col={4} value={this.state.game.board[6][4]} />
              <Cell row={6} col={5} value={this.state.game.board[6][5]} />
              <Cell row={6} col={6} value={this.state.game.board[6][6]} />
              <Cell row={6} col={7} value={this.state.game.board[6][7]} />
            </tr>
            <tr>
              <Cell row={7} col={0} value={this.state.game.board[7][0]} />
              <Cell row={7} col={1} value={this.state.game.board[7][1]} />
              <Cell row={7} col={2} value={this.state.game.board[7][2]} />
              <Cell row={7} col={3} value={this.state.game.board[7][3]} />
              <Cell row={7} col={4} value={this.state.game.board[7][4]} />
              <Cell row={7} col={5} value={this.state.game.board[7][5]} />
              <Cell row={7} col={6} value={this.state.game.board[7][6]} />
              <Cell row={7} col={7} value={this.state.game.board[7][7]} />
            </tr>
            <tr>
              <td className="header" colSpan="8">
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
