import React, { Component } from 'react'
import loading from '../asset/spinner.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='spinner'>
        <img src={loading} alt="loading" height="80"/>
      </div>
    )
  }
}

export default Spinner
