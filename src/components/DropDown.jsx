// eslint-disable-next-line no-unused-vars
import React, { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/auth';

import "../styles/dropdown.scss";

function DropDown() {

    const menuItens = [
        {
            title: 'Cadastrar',
            path: '/signup'
        },
        {
            title: 'Admin',
            path: '/admin'
        },
        {
            title: 'Sair',
            path: '/login'
        },
    ]

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const {logout} = useContext(AuthContext);

    const teste = (title) => {
        if(title === "Sair") logout();
        setClick(false);
        
    }

    return (
        <>
            <section className='drop-section'>
                <ul onClick={handleClick} className={click ? 'drop-menu' : 'dropdown-menu'}>
                    {menuItens.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className='menu-items' to={item.path} onClick={ () => teste(item.title)}>
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
