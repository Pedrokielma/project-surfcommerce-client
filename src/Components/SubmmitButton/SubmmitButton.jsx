import React from 'react'
import './SubmmitButton.scss'

function SubmmitButton(props) {
  return (
    <button className='submmit-button' type="submit">{props.content}</button>
  )
}

export default SubmmitButton