import { MenuOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './styles/Header.css'

const Header = () => {

    const [open, setOpen] = useState(false)

    const showMenu = () => {
        setOpen(!open)
    }



    return (
        <div className='header'>
            <nav>

                <div className='logo'>
                    <h1>C A M I L L Y</h1>
                </div>

                <ul className='ul-items'>

                    <div className='hamburguer-menu'>
                        <MenuOutlined className='menu' onClick={showMenu} />
                    </div>

                </ul>

            </nav>

            <nav className={open ? 'slider active' : 'slider'} onClick={showMenu}>
                <ul className='slider-ul' >
                
                    <a href="https://github.com/Camillyyyy">
                        <button className='button-54'> GitHub </button>
                    </a>

                    <a href="http://google.com">
                        <button className='button-54'> LinkedIn </button>
                    </a>


                </ul>
            </nav>

        </div >
    )
}

export default Header