import React, { Component } from 'react';
import './HeaderComponent.css';

import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from "../../redux/actions/ActionLogin";


class Header extends Component {
    showUsername = () => {
        var { login } = this.props;
        if (login.length !== 0) {
            return (
                <span className="header-title">{login[0].fname} {login[0].lname}</span>
            );
        } else {
            return (
                <span className="header-title">Social Networks</span>
            );
        }
    }

    Signout = () => {
        this.props.logout();
    }


    showConnexion = () => {
        var { login } = this.props;
        if (login.length !== 0) {
            return (
                <button type="button" onClick={() => this.Signout()} className="btn btn-primary">
                    Log out
                </button>
            );
        } else {
            return (
                <button type="button" className="btn btn-primary">
                    <NavLink className="loginTitle" to="/signup">Log in</NavLink>
                </button>
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="header row">
                    <div className="header-item">
                        <img src="images/logo.jpg" className="header-logo " height="40" alt='social networks' />
                        {this.showUsername()}
                    </div>
                    <div className="header-item">
                        {this.showConnexion()}
                    </div>
                </div>
                <ul class="nav justify-content-center menu">
                    <li className="nav-item">
                        <NavLink exact={true} activeClassName="nav-active" className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="nav-active" className="nav-link" to="/myprofil">My Profil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="nav-active" className="nav-link" to="/signup">Sign up</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="nav-active" className="nav-link" to="/about">About</NavLink>
                    </li>
                </ul>

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => {dispatch(logout())}
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);