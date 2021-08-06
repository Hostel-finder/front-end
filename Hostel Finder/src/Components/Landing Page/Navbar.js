import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [clicked, setClicked]=useState(false);

    const handleClick=()=> setClicked(!clicked)

    const closeMobileMenu=()=> setClicked(false);

    const [button, setButton]=useState(true);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize',showButton);
    return (
        <>
                <nav className='navbar' >

                    <div className='navbar-container'>
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>Hostel Finder
                            <i className='fab fa-typo3' />
                        </Link>
                    </div>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={clicked ? 'fas fa-times':'fas fa-bars'} />
                    </div>

                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        {/* <li className='nav-item'>
                            <Link className="nav-links" to="/" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li> */}
                        {/* <li className='nav-item'>
                            <Link className="nav-links" to="/services" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li> */}
                        {/* <li className='nav-item'>
                            <Link className="nav-links" to="/products" onClick={closeMobileMenu}>
                                Product
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link className="nav-links-mobile" to="/login" onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                    </ul>
                    
                    {button && <Button buttonStyle='btn--outline'>Login</Button> }

                </nav> 
        </>
           
    )
}

export default Navbar
