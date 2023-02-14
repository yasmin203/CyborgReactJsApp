import React from 'react'
import { Link } from 'react-router-dom'
import "./Buttons.css"

const PrimaryBtn = (props) => {
  return (
    <div className="main-button primary-button"><Link to='/#' >{ props.children} </Link></div>
  )
}

const SecondaryBtn = (props) => {
  return (
    <div className=" main-button secondary-button"><Link to='/#' >{ props.children} </Link></div>
  )
}
export default PrimaryBtn
export {SecondaryBtn}
