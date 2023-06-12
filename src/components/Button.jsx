import React from 'react'

function Button(props) {
  return (
    <button className="login-btn" type="submit">{props.button}</button>
  )
}

export default Button