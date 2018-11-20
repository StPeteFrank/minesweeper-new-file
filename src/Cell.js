import React, { Component } from 'react'

class Cell extends Component {
  flagCell = event => {
    console.log(`Clicked at row ${this.props.row} column ${this.props.col}`)
  }

  render() {
    return <td onClick={this.flagCell}>{this.props.value}</td>
  }
}

export default Cell
