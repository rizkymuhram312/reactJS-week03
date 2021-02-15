import React from 'react';
import './MainLayout.css';
import logo from './images/kuda.svg'

const MainLayout = () =>{
    return (
        <div className="container">
            <div className="nav-top">
                <ul>
                    <li className="logo"><a><img src={logo}/></a></li>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>

            </div>
            <div className="nav-side">
                <ul>
                    <li><a href="/counter">Project#1</a></li>
                    <li><a href="/layout">Project#2 Layout</a></li>
                    <li><a href="/list">Project#3 List</a></li>
                    <li><a href="/todo">Project#4 Todo</a></li>
                </ul>
            </div>

            <div className="main-content">
                <h1>Content</h1>

            </div>

            <div className="footer">
                <h2>&copy; Codeid Academy {(new Date()).getFullYear()}
                    </h2>
                    </div>



        </div>
    )
}

export default MainLayout;


