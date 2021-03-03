import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>

            <nav className="navbar">
                <div className="navbar-container">
                    <a href="/">
                        <div className="tohome">Kenneth McCray Jr</div>
                    </a>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/websites' className='nav-links' onClick={closeMobileMenu}>
                                Websites
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a href='https://docs.google.com/document/d/1-oMeLmaitESOA9gH08hzzZAc-4XpCQIlWrT1fV6bkz0/edit?usp=sharing' className='nav-links' onClick={closeMobileMenu}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}


export default Navbar
