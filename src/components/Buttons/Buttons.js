import React from 'react'
import "./Buttons.css"
const PrimaryBtn = (props) => {
  return (
    <div className="main-button primary-button"><a href='#' >{ props.children} </a></div>
  )
}

const SecondaryBtn = (props) => {
  return (
    <div className=" main-button secondary-button"><a href='#' >{ props.children} </a></div>
  )
}
export default PrimaryBtn
export {SecondaryBtn}
