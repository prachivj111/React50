import React from 'react'
import './Input.css'

const Input = ({type="text", ...props}) => {
  return (
    <input className='input-field' type={type} {...props} />
  )
}

export default Input