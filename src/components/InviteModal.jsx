import React from 'react'

function InviteModal({setOpenInviteModal}) {
  return (
    <div>
        <h2>Convidar</h2>
        <button onClick={ ()=> setOpenInviteModal(false)}>cancelar</button>
    </div>
  )
}

export default InviteModal