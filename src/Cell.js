import React, { Component } from 'react'

class Cell extends Component {
  checkCell = event => {
    this.props.checkCell(this.props.row, this.props.col)
  }
  flagCell = event => {
    event.preventDefault()

    this.props.flagCell(this.props.row, this.props.col)
  }
  cellClassName = () => {
    const Lookup = {
      '*': 'cell-bomb',
      F: 'cell-flag',
      '@': 'cell-flag',
      _: 'cell-covered',
      '1': 'cell-1',
      '2': 'cell-2',
      '3': 'cell-3',
      '4': 'cell-4',
      '5': 'cell-5',
      '6': 'cell-6',
      '7': 'cell-7',
      '8': 'cell-8'
    }
    return Lookup[this.props.value] || 'cell-exposed'
  }

  lookupValue = () => {
    const Lookup = { '*': '🎇', F: '🚩', '@': '🚩', _: '_' }

    let foundValue = Lookup[this.props.value] || this.props.value
    return foundValue
  }

  render() {
    return (
      <td
        className={this.cellClassName()}
        onClick={this.checkCell}
        onContextMenu={this.flagCell}
      >
        {this.lookupValue()}
      </td>
    )
  }
}

export default Cell
