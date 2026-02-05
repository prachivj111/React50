import React from 'react'
import './Button.css'

const Button = ({type="button", label, ...props}) => {
  return (
    <button className='btn' type={type} {...props}>{label}</button>
    
  )
}

export default Button
