import React, { Component } from 'react'

class Cell extends Component {
  flagCell = event => {
    console.log(`Clicked at row ${this.props.row} column ${this.props.col}`)

    this.props.checkCell(this.props.row, this.props.col)
  }

  render() {
    // This is an onClick handle
    return <td onClick={this.flagCell}>{this.props.value}</td>
  }
}

export default Cell
