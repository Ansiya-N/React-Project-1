import React from "react";
import "./Header.css"

function Header(){
    return(
        <section className="header-section">
        <div className="logo">
            Logo
        </div>
        <div className="navbar">
            <div className="navicon">About</div>
            <div className="navicon">Work</div>
            <div className="navicon">Contact</div>
        </div>
        </section>

    );
}

export default Header;