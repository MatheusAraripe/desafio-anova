import React from 'react'
import "../styles/input.scss";

function Input({name, type, placeholder, register, error}) {
  
  return (
    <div className="form-group">
        <input
            className='login-input'
            type={type}
            name={name}
            placeholder={placeholder}
            {...register(name)}
        />
        <span className="error">
            {error}
        </span>
    </div>
  )
}

export default Input