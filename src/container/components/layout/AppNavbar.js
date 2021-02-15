import React from 'react';
import logo from '../../images/kuda.svg'

const AppNavbar = () => {
    return(
        <div className="nav-top">
            <ul>
                <li className="logo">
                    <a>
                        <img src={logo} />
                    </a>
                </li>
                <li>
                    <a href="/home">Home</a>
                    
                </li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    );
};

export default AppNavbar;