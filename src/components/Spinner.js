import React, { Component } from 'react'
import Spin from "./Spin.gif"
import './Spinner.css'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center spin'>
        <img src={Spin} style={{"height":"80px", "width":"80px"}}/>
      </div>
    )
  }
}