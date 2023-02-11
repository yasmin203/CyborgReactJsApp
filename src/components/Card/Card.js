import './Card.css';
import React from 'react'
import {FaStar,FaDownload} from 'react-icons/fa'
const Card = (props) => {
  return (
    <div className='most-popular-item'>
          <div className='card-wrapper'>
            <img src={props.image} alt='fortnate' className='most-popular-img' />
            <div className='img-text'>
              <h4 className='img-title'>
                {props.title}
                <br/><span>{props.category}</span>
              </h4>
              <ul>
                <li><span style={{"color":"yellow"}}><FaStar/></span>  <span>{props.rate}</span></li>
                <li><span style={{"color":"var(--color-pink)"}}><FaDownload/></span>  <span>{props.download}M</span></li>
              </ul>
            </div>
          </div>
        </div>
  )
}

export default Card