import React from "react";
import logo from "../logo.png"

const Nav = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Kesiah's Logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">MY WORK</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Nav