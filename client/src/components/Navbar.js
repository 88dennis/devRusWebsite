import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';




function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClickBurger = ()=> setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    const showButton = ()=> {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton();
    },[])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to="/" className="navbar_logo" onClick={closeMobileMenu}>
                        devRus <i className="fas fa-code"></i>
                    </Link>
                    <div className="menu_icon" onClick = {handleClickBurger}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                        <li className="nav_item">
                            <Link to="/" className='nav_links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link to="/services" className='nav_links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/projects" className='nav_links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/signup" className='nav_links_mobile' onClick={closeMobileMenu}>
                                Signup
                            </Link>
                        </li>
                    </ul>

                    {button && <Button
                        buttonStyle='btn__outline'
                        >SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
