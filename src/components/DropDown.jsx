// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "../styles/dropdown.scss";

function DropDown() {

    const menuItens = [
        {
            title: 'Entrar',
            path: '/login'
        },
        {
            title: 'Cadastrar',
            path: '/signup'
        },
        {
            title: 'Admin',
            path: '/admin'
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
