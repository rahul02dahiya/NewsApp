import React from 'react'
import Spin from "./Spin.gif"
import './Spinner.css'

const Spinner = ()=> {
 
    return (
      <div className='text-center spin'>
        <img src={Spin} alt="..."/>
      </div>
    )
}

export default Spinner;