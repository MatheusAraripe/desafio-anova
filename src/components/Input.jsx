import React from 'react'

function Input({type, placeholder, register }) {
  
  return (
    <input
        className='login-input'
        type={type}
        placeholder={placeholder}
        {...register(type)}
    />
  )
}

export default Input