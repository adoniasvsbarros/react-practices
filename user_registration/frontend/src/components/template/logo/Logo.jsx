import React from 'react';

import "./Logo.css"
import logo from "../../../assets/imgs/logo.png"

export default props => {
    return(
        <aside className="logo">
            <a href="/" className="logo">
                <img src={logo} alt=""/>
            </a>
        </aside>
    );
} 