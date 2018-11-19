import React, { Component } from 'react'

class Cell extends Component {
  render() {
    return <td>{this.props.value}</td>
  }
}

export default Cell
