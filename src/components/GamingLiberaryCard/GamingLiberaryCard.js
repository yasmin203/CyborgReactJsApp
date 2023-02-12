import React from 'react'
import "./GamingLiberaryCard.css"
import { SecondaryBtn } from '../Buttons/Buttons'
const GamingLiberaryCard = (props) => {
    return (
      <>
      <div className='gaming-liberary-card'>
          <ul>
          <li className='gaming-liberary-card-img'><img src={props.image} alt="liberaryC" /></li>
              <li><h4>{props.title}</h4> <span>{props.category}</span></li>
          <li><h4>Date Added </h4><span>{props.DateAdded}</span></li>
          <li><h4>Hours Played</h4><span>{props.HoursPlayed}</span></li>
          <li><h4>currently</h4><span>{props.downloaded}</span></li>
          
          <SecondaryBtn>Download</SecondaryBtn>

          </ul> 

            </div>
            </>
  )
}

export default GamingLiberaryCard