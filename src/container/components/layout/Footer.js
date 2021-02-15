import React from 'react';

const Footer = () =>{
    return(
        <div className="footer">
            <h2>
            &copy; Codeid Academy {(new Date()).getFullYear()}
            </h2>
        </div>
    );
};
export default Footer;