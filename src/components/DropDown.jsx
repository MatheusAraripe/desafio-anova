// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function DropDown() {

    const menuItens = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Entrar',
            path: '/login'
        },
        {
            title: 'Cadastrar',
            path: '/signup'
        },
    ]

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <section className='drop-section'>
                <ul onClick={handleClick} className={click ? 'drop-menu' : 'dropdown-menu'}>
                    {menuItens.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className='menu-items' to={item.path} onClick={() => setClick(false)}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}

export default DropDown;
