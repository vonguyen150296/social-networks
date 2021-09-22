import React, { Component } from 'react';
import "./SignInUpPage.css";

// import redux
import { connect } from "react-redux";
import { signup } from "../../redux/actions/ActionUsers";
import { login } from "../../redux/actions/ActionLogin";

class SignInUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            l_username: "",
            l_password: "",
            s_username: "",
            S_password: "",
            lname: "",
            fname: "",
            gender: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeStatus = () => {
        this.setState({
            login: !this.state.login,
            l_username: "",
            l_password: "",
            s_username: "",
            s_password: "",
            lname: "",
            fname: "",
            gender: true
        })
    }

    handleChange(event) {
        var name = event.target.name;
        var value = event.target.value
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.login) {
            // normalement, on traiter sur Backend, j'utilise Mock API, alors, je traite login d'ici
            var user = this.props.users.filter(user => user.username === this.state.l_username && user.password === this.state.l_password);
            if (user.length !== 0) {
                this.props.login(user);
            } else {
                alert("your username and your password are incorrect!")
            }
        } else {
            var date = new Date();
            var createAt = Math.round(date.getTime()/1000);
            var userInfo = {
                "lname": this.state.lname,
                "fname": this.state.fname,
                "username": this.state.s_username,
                "password": this.state.s_password,
                "createAt": createAt,
                "updateAt": createAt,
                "gender": true,
            }
            var data = [];
            data[0] = userInfo;

            this.props.signup(data);
        }

    }

    showElement = () => {
        if (this.state.login) {
            return (
                <React.Fragment>
                    <div className="login-title">Log In</div>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <div class="form-group login-form-item">
                            <label >Email address</label>
                            <input type="email" class="form-control"
                                name="l_username"
                                value={this.state.l_username}
                                onChange={this.handleChange}
                                placeholder="Enter email" required />
                        </div>
                        <div class="form-group login-form-item">
                            <label >Password</label>
                            <input type="password" class="form-control"
                                name="l_password"
                                value={this.state.l_password}
                                onChange={this.handleChange}
                                placeholder="Password" required />
                        </div>
                        <button type="submit" class="btn btn-primary form-control login-form-item">Log in</button>
                        <p className="login-form-item" onClick={() => this.changeStatus()}>Create new account</p>
                    </form>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div className="login-title">Sign Up</div>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <div class="form-group login-form-item">
                            <label >First Name</label>
                            <input type="text" class="form-control"
                                name="fname"
                                value={this.state.fname}
                                onChange={this.handleChange}
                                placeholder="Enter your first name" required />
                        </div>
                        <div class="form-group login-form-item">
                            <label >Last Name</label>
                            <input type="text" class="form-control"
                                name="lname"
                                value={this.state.lname}
                                onChange={this.handleChange}
                                placeholder="Enter your last name" required />
                        </div>
                        <div class="form-group login-form-item">
                            <label >Email address</label>
                            <input type="email" class="form-control"
                                name="s_username"
                                value={this.state.s_username}
                                onChange={this.handleChange}
                                placeholder="Enter email" required />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group login-form-item">
                            <label >Password</label>
                            <input type="password" class="form-control"
                                name="s_password"
                                value={this.state.s_password}
                                onChange={this.handleChange}
                                placeholder="Password" required />
                        </div>
                        <button type="submit" class="btn btn-primary form-control login-form-item">Sign up</button>
                        <p className="login-form-item" onClick={() => this.changeStatus()}>Log in</p>
                    </form>
                </React.Fragment>
            );
        }

    }
    render() {
        return (
            <React.Fragment>
                {this.showElement()}
            </React.Fragment>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
};

const mapDispatchToProps = (dispatch) => ({
    signup: (user) => { dispatch(signup(user)) },
    login: (user) => { dispatch(login(user)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInUp);