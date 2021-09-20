import React, { Component } from 'react';
import './HeaderComponent.css';

import { NavLink } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header row">
                    <div className="col-md-11 col-sm-10 col-9 header-item">
                        <img src="images/logo.jpg" className="header-logo " height="40" alt='social networks' />
                        <span className="header-title">Social Networks</span>
                    </div>
                    <div className="col-md-1 col-sm-2 col-1 header-item">
                        <button type="button" className="btn btn-primary">Log in</button>
                    </div>
                </div>
                <ul class="nav justify-content-center menu">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/myprofil">My Profil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                </ul>

            </React.Fragment>
        );
    }
}

export default Header;