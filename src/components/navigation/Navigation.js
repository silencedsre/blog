import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons'

function Navigation(){
    return(
        <div className='navbar'>
            <div className='container'>
                <a href='#'><h3><FontAwesomeIcon icon={faBlog}/>Dead Poets Society</h3></a>
                <ul className='nav-items'>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>BLOG</a></li>
                    <li><a href='#'>ABOUT</a></li>
                    <li><a href='#'>CONTACT</a></li>
                </ul>
            </div>
        </div>
)
}

export default Navigation;