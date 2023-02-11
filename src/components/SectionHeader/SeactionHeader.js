import React from 'react'
import './SeactionHeader.css'
const SeactionHeader = (props) => {
    return (
      <>
    <div className='section-header'>
    <h4>
     {props.children}
    </h4>
            </div>
      </>
  )
}

export default SeactionHeader