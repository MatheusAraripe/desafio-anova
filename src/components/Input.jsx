import React from 'react'
import "../styles/input.scss";

function Input({name, type, placeholder, register, clas}) {
  
  return (
    <div className="form-group">
        <input
            className={clas}
            type={type}
            name={name}
            placeholder={placeholder}
            {...register(name)}
        />
    </div>
  )
}

export default Input