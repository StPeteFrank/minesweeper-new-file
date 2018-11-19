import React, { Component } from 'react'

class Cell extends Component {
  flagCell = event => {
    console.log('clicked cells')
  }

  render() {
    // This is an onClick handle
    return <td onClick={this.flagCell}>{this.props.value}</td>
  }
}

export default Cell
