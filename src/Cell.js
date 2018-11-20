import React, { Component } from 'react'

class Cell extends Component {
  checkCell = event => {
    console.log(`Clicked at row ${this.props.row} column ${this.props.col}`)

    this.props.checkCell(this.props.row, this.props.col)
  }
  flagCell = event => {
    event.preventDefault()

    console.log('RIGHT CLICKED')
  }
  render() {
    return (
      <td onClick={this.checkCell} onContextMenu={this.flagCell}>
        {this.props.value}
      </td>
    )
  }
}

export default Cell
