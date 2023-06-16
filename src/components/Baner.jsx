// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../styles/baner.scss"
// import Select from 'react-select'

const options = [
  { value: 'Rio de Janeiro', label: 'Rio de Janeiro' },
  { value: 'Juiz de Fora', label: 'Juiz de Fora' },
  { value: 'Sao Paulo', label: 'Sao Paulo' }
]

function Baner() {
  return (
    <div className='baner-container'>
      <Select options={options} className='unidade-input'/>
      <input type="text" name="" id="" className='nome-input'/>
    </div>
  )
}

export default Baner
