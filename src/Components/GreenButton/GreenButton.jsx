import React from 'react'
import './GreenButton.scss'

function GreenButton(props) {
  return (
    <button className='submmit-button' type="submit">{props.content}</button>
  )
}

export default GreenButton