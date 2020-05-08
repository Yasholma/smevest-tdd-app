import React from "react";
import { Link } from "react-router-dom";
import classes from "./login.module.css";
import { Facebook, Mail } from "@material-ui/icons";

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        role: "",
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log("Submit");
    };

    render() {
        return (
            <div className={classes.Login}>
                <div className={classes.Container}>
                    <h2>Login To SmeVest</h2>
                    <form onSubmit={this.handleSubmit} className={classes.Form}>
                        <div className={classes.FormGroup}>
                            <input
                                type='email'
                                value={this.state.email}
                                id='email'
                                name='email'
                                placeholder='Email Address'
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={classes.FormGroup}>
                            <input
                                type='password'
                                value={this.state.password}
                                id='password'
                                name='password'
                                placeholder='Password'
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={classes.FormButtons}>
                            <div className={classes.OAuthLinks}>
                                <h4>Login Options</h4>
                                <Facebook
                                    style={{
                                        margin: "0 5px",
                                        color: "#fff",
                                        background: "#3b5998",
                                        padding: 5,
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                    }}
                                />
                                <Mail
                                    style={{
                                        margin: "0 5px",
                                        color: "#fff",
                                        background: "#D44638",
                                        padding: 5,
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                    }}
                                />
                            </div>
                            <button type='submit'>Login</button>
                        </div>
                        <p>
                            Don't have an account yet?{" "}
                            <Link to='/register'>Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
