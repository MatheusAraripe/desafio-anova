import React from 'react'
import "../styles/button.scss"

function Button(props) {
  return (
    <button className="login-btn" type="submit">{props.button}</button>
  )
}

export default Button